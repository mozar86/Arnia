import express from "express"

interface User {
  id: string;
  nome: string;
  email: string;
  senha: string
}

// const repository: Array<User> = []
const repository: User[] = []

// instanciar servidor
const app = express()
app.use(express.json())
// JSON -> Javascript Object Notation

// Criar endpoints
// conjunto de url + método http
// http://localhost:3333/users GET
// /users GET -> array de usuários
app.get("/users", (req, res) => {
  return res.json({
    usuarios: repository
  })
})

app.get("/users/:id", (req, res) => {
  const user = repository.find((u) => String(u.id) === String(req.params.id))
  console.log(user, repository)
  return res.json({
    usuario: user
  })
})

/*
Locais para receber requisição: 

Body - sempre será objeto
Params - sempre que quiser receber um ID, será por parâmetro
Query - informações adicinais que vão agragar na lógica, como informações de paginação, de busca... Headers - cabeçalho contendo informações sobre a requisição ou resposta
*/

app.post("/users", (req, res) => {
  const user = {
    id: new Date().getTime(),
    ...req.body
  }

  repository.push(user)
  return res.json()
})


// rodar servidor
app.listen(3333, () => {
  console.log("Server is running")
})

