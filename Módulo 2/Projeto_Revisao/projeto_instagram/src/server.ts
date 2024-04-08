import express from "express"

 const server = express()
 const port = 3000

 server.listen(3000, () => {
    console.log(`Server is reunning: http://localhost:${port}/`)
 })