import express from "express"
import { createTransactionController, getTransactionByIdController, listTransactionController } from "./controllers/transaction-controller"

const app = express()
app.use(express.json())

app.post("/transactions", createTransactionController)
app.get("/transactions", listTransactionController)
app.get("/transactions/:id", getTransactionByIdController)

app.listen(3000, () => {
  console.log("🛼 Server is running")
})

// rotas > controller > repository > database
