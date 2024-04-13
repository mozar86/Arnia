import 'dotenv/config'
import express from "express"

import { connectDatabase } from "./database/database"
import './env'
import router from './routes'
import { logMiddleware } from './middlewares/logMiddleware'

connectDatabase()
const port = 3000
const app = express()

app.use(express.json())
app.use(logMiddleware)
app.use("/", router)


app.listen(3000, () => {
  console.log(`🚀 Server is running: http://localhost:${port}/`)
})
