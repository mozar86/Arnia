import { ObjectId } from "mongodb";
import { transactionCollection } from "../database/connection";
import { ITransactionProps, Transaction } from "../entities/transaction";

class TransactionRepository {
  constructor() {}

// - Deve ser capaz de fazer uma transacao, passando: value, description and kind.
  async create(data: Transaction) {
    const transaction = new Transaction(data)
    await transactionCollection.insertOne(transaction)
  }

// - Deve ser possivel buscar todas as transacoes
  async list() {
    const transactions = await transactionCollection.find().toArray()
    return transactions
  }

// - Deve ser possivel buscar uma transacao pelo id
  async getById(id: string) {
    const transaction = await transactionCollection.findOne({
      _id: new ObjectId(id)
    })
    return transaction
  }
}

export { TransactionRepository }