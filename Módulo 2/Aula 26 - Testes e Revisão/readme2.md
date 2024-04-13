[ 'gabriel', 'elizabete', 'carlos', 'jose' ]
mongodb+srv://fulano:arnia123@turma7.8hjtu4v.mongodb.net/
# Instagram

## Entidades

- User
  - nickname: text
  - email: text
  - password: text
- Post
  - author: User
  - content: text
  - like_users: User list
  - created_at: Date
  - updated_at: Date

## Funcionalidades
- Deve ser possível criar um usuário, passando: nickname, password, email
- Dever ser possível visualizar os usuários
- Deve ser possível criar um post, passando: id do autor, conteúdo
- Deve ser possível listar os posts


## Dificuldades

- Entendimento das camadas
- Tipagem das camadas: input & output
- Relacionamento
- Variavel de ambiente
- Validação de dados
- Factory pattern

- [x] Typescript
- [ ] Express -> microframework -> Criar rota
- [ ] Mongoose -> Manipular o banco de dados