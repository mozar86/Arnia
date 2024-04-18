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


# Autenticação -> O ato do usuário informar o login e senha e retornamos o token(JWT)

A Autenticação será uma rota POST

## Algoritmo da Autenticação

1. Recebe o login e senha do usuário
2. Validar se existe um usuário com aquele login do banco de dados
  a. Se não existir, retornamos um erro
  b. Se existir, continuar
3. Validar se a senha que o usuário informou é a mesma que está no banco de dados
  a. Se estivar errado, retornamos um erro
  b. Se estiver certo, continuar
4. Gerar o token
5. Retornar o token

