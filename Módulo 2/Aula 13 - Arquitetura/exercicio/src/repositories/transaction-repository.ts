import { Collection, ObjectId } from "mongodb";
// Importa a Collection e ObjectId do pacote 'mongodb', que são utilizados para lidar com operações no banco de dados MongoDB.
import { Transaction } from "../entities/transaction";
// Importa a classe Transaction do arquivo 'transaction.ts' localizado na pasta '../entities/'.

class TransactionRepository {
  collection: Collection
  // Declaração do atributo collection, que será uma instância de Collection.

  constructor(collection: Collection) {
    // Método construtor da classe TransactionRepository que recebe uma coleção como parâmetro.
    this.collection = collection
    // Atribui a coleção recebida ao atributo collection da instância.
  }

  async create(data: Transaction) {
    // Método assíncrono para criar uma nova transação.
    const transaction = new Transaction(data)
    // Cria uma nova instância da classe Transaction com os dados fornecidos.
    await this.collection.insertOne(transaction)
    // Insere a transação na coleção.
  }

  async list() {
    // Método assíncrono para listar todas as transações.
    const transactions = await this.collection.find().toArray()
    // Encontra todas as transações na coleção e as converte para um array.
    return transactions
    // Retorna a lista de transações.
  }

  async getById(id: string) {
    // Método assíncrono para obter uma transação por seu ID.
    const transaction = await this.collection.findOne({
      _id: new ObjectId(id)
    })
    // Busca a transação na coleção com o ID fornecido.
    return transaction
    // Retorna a transação encontrada.
  }
}

export { TransactionRepository }
// Exporta a classe TransactionRepository para uso externo.

/*
Neste comentário, foram explicadas as ações realizadas em cada método da classe TransactionRepository. Cada método corresponde a uma operação específica relacionada à manipulação das transações na coleção do MongoDB. As operações de acesso ao banco de dados são realizadas utilizando os métodos fornecidos pela biblioteca mongodb, como insertOne, find e findOne.
*/