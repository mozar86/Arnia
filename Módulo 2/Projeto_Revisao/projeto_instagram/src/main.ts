import 'dotenv/config'
import express from "express"
import { createUserController } from "./controller/userController"
import { connectDatabase } from "./database/database"
import './env'

connectDatabase()
const app = express()
const port = 3000

app.use(express.json())
app.post("/users", createUserController)

app.listen(3000, () => {
  console.log(`🚀 Server is running: http://localhost:${port}/`)
})
