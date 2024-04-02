# Sistema de Blog Part 2

## Entidades

User

- fullname -> string[Required]
- nickname -> string[Required][Unique]
- email -> string[Required][Unique]
- posts -> Array de ObjectId

Post

- author -> ObjectId
- content -> string[Required, minLength(3)]
- likes -> number[default(0), min(0)]
- createdAt -> Date
- updatedAt -> Date

Comment

- post -> ObjectId
- content -> string[Required, minLength(3)]
- createdAt -> Date
- updatedAt -> Date

## Funcionalidades

- [x] Deve ser possível criar um post, passando: author (\_id), content
- [x] Deve ser possível dar like em um post
- [x] Deve ser possível buscar todos os posts de um author
- [x] Deve ser possível buscar todos os posts
- [x] Deve ser possível deletar um post

- [x] Deve ser possível criar um usuário, passando: fullname, nickname e email
- [x] Deve ser possível listar todos usuários e seus posts

- [ ] Deve ser possível criar um comment, passando: post (\_id), content
- [ ] Deve ser possível buscar todos os comments de um post
- [ ] Deve ser possível deletar um comment
