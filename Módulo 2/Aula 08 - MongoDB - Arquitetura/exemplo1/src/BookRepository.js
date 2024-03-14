const { Book } = require('./book')
const { bookCollection, client } = require('./database')

// repositorio -> tem a responsabilidade de manipular o banco de dados
class BookRepository {
  async create(data) {
    const book = new Book(data)
    const response = await bookCollection.insertOne(book)
    console.log(response)
    client.close()
  }

  async list() {
    const books = await bookCollection.find().toArray()
    return books
  }
}

module.exports = { BookRepository }