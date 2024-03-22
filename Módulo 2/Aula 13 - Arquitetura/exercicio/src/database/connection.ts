import { MongoClient } from "mongodb"
// Importa a classe MongoClient do pacote 'mongodb', que é utilizada para se conectar e interagir com o banco de dados MongoDB.

// Cria uma instância de MongoClient.
const client = new MongoClient()

// Obtém uma referência à coleção de transações no banco de dados "arniabank".
const transactionCollection = client.db("arniabank").collection("transactions")

export { client, transactionCollection }
// Exporta a instância de MongoClient (client) e a coleção de transações (transactionCollection) para serem utilizadas em outros arquivos.

/*
Este comentário descreve o que está sendo feito no código. A instância de MongoClient é criada para se conectar ao banco de dados MongoDB. Em seguida, a coleção de transações é obtida a partir do banco de dados chamado "arniabank". Ambos, o cliente MongoDB e a coleção de transações, são exportados para que possam ser utilizados em outros arquivos do projeto.
*/