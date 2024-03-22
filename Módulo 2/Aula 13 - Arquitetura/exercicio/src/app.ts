import express from "express"
// Importa o framework Express, utilizado para lidar com rotas e requisições HTTP.

import { makeTransaction } from "./factories/make-transaction"
// Importa a função makeTransaction do arquivo 'make-transaction.ts' localizado na pasta './factories/'.

const app = express()
// Cria uma instância do aplicativo Express.

app.use(express.json())
// Adiciona o middleware express.json() para permitir o parsing de corpos de requisição no formato JSON.

const transactionController = makeTransaction()
// Cria uma instância do controlador de transações utilizando a função makeTransaction.

// Define as rotas e associa cada uma a uma função do controlador de transações.
app.post("/transactions", transactionController.create.bind(transactionController))
// Rota para criar uma nova transação. Utiliza o método 'create' do controlador de transações.

app.get("/transactions", (req, res) => {
  return transactionController.list(req, res)
})
// Rota para listar todas as transações. Utiliza o método 'list' do controlador de transações.

app.get("/transactions/:id", transactionController.getById)
// Rota para obter uma transação por ID. Utiliza o método 'getById' do controlador de transações.

app.listen(3000, () => {
  console.log("🛼 Server is running")
})
// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver rodando.

/*
Este comentário descreve a configuração das rotas no aplicativo Express, associando cada rota a uma função específica do controlador de transações. O middleware express.json() é utilizado para permitir o parsing de corpos de requisição no formato JSON. O servidor é iniciado na porta 3000 e uma mensagem é exibida no console indicando que o servidor está em execução.
*/