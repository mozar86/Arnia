// Função para buscar um livro pelo título no banco de dados
export function findBookByTitle(title, database) {
  return database.find(item => item.titulo === title);
}

// Função para atualizar o ano de publicação de um livro no banco de dados
export function updateBookYear(bookId, newYear, database) {
  const existingBookIndex = database.findIndex(item => item.id === bookId);

  if (existingBookIndex === -1) {
    return "Book not found";
  }

  database[existingBookIndex] = { ...database[existingBookIndex], ano: newYear };
  return "Book year updated successfully";
}

// Função para alterar a disponibilidade de um livro no banco de dados
export function updateBookAvailability(bookId, newAvailability, database) {
  const existingBookIndex = database.findIndex(item => item.id === bookId);

  if (existingBookIndex === -1) {
    return "Book not found";
  }

  database[existingBookIndex] = { ...database[existingBookIndex], disponibilidade: newAvailability };
  return "Book availability updated successfully";
}

// Função para excluir um livro do banco de dados
export function deleteBook(bookId, database) {
  const existingBookIndex = database.findIndex(item => item.id === bookId);

  if (existingBookIndex === -1) {
    return "Book not found";
  }

  database.splice(existingBookIndex, 1);
  return "Book deleted successfully";
}