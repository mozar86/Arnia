// express
import express, { request, response }  from "express";
// npm i @types/express

// criar servidor
const app = express()

app.get("./users", (request, response) => {
    return response.json({
        usuarios: ["Carlos", "Mozar", "Elizabete"]
    })
})

// rodar servidor
app.listen(3333, ()=> {console.log("Server is running")})
// exemplo: http://localhost:3333/products + mpetodo http 

