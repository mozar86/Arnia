const { BookRepository } = require("./BookRepository");

const bookRepository = new BookRepository()

bookRepository.create({
  title: 'Pai rico pai pobre',
  description: 'Neste livro você vai aprender lições de vida sobre investimentos',
  category: 'Finanças',
  author: 'Robert Kiyosaky',
  releasedAt: '1995',
})









