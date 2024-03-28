import "dotenv/config"
import express from "express"
import { Database } from "./database/connection";
import { Movie } from "./models/movie";

Database.initialize()

const app = express()
app.use(express.json())

app.post("/movies", async (req, res) => {
  const { body } = req
  const movie = await Movie.create({
    ...body
  })
  const movies = await Movie.find()
  return res.json({ movie, movies })
})

app.listen(3000, () => {
  console.log("Server is running")
})

/**
 * 
 * Controller -> Receber a requisicao > manda pro service > retorna a resposta
 * Service -> Conter as regras de negocio
 * Repository -> Manipula o banco de dados
 * 
 */
