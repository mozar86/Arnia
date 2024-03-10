/*
# Sistema de biblioteca

## Entidades

Livro {
  titulo string
  descricao string
  ano de lancamento date
  autor string
  categoria string
}

## Casos de uso

- Deve ser possível cadastrar um livro, passando as informacoes: titulo, descricao,
ano de lancamento, autor e categoria;
- Deve ser possível buscar um livro pelo titulo
- Deve ser possível buscar todos os livros de um determinado autor
- Deve ser possível atualizar as informacoes de um livro passando o seu id
- Deve ser possível deletar cada livro pelo id
*/

class Livro {
  id
  titulo
  descricao
  anoDeLancamento
  autor
  categoria

  constructor (data) {
    this.id = new Date().getTime()
    this.titulo = data.titulo
    this.descricao = data.descricao
    this.anoDeLancamento = data.anoDeLancamento
    this.autor = data.autor
    this.categoria = data.categoria
  }
}

class RepositorioLivros {
  repositorio = []

  cadastrarLivro(data) {
    const livro = new Livro(data)
    this.repositorio.push(livro)
    return livro
  }

  buscarLivro(tituloLivro) {
    const livro = this.repositorio.find((livro) => livro.titulo === tituloLivro)

    if (!livro) {
      return 'Livro não encontrado'
    }
    return livro
  }

  buscarTodos(livros) {
    return this.repositorio.find((livrosAutor) => livros.autor === livros)
  }

  deletarLivro(id) {
    const idLivro = this.repositorio.findIndex((livro) => livro.id === id)
    this.repositorio.splice(idLivro, 1)
  }
}