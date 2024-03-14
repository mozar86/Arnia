// model / entity(entidade) / domain (dominio) / schema -> o template do objeto que será salvo do banco de dados
class Book {
    title
    description
    releasedAt
    category
    author
    createdAt
  
    constructor(data) {
      this.title = data.title
      this.description = data.description
      this.releasedAt = data.releasedAt
      this.category = data.category
      this.createdAt = new Date()
    }
  }
  
  module.exports = { Book }