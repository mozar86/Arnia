import { MongoClient } from "mongodb"

const client = new MongoClient()
const transactionCollection = client.db("arniabank").collection("transactions")

export { client, transactionCollection }
