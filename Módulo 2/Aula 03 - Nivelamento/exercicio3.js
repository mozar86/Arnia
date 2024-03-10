/*
# Sistema Blog
OBS: Crie o sistema utilizando as camadas Entities/Repositories

## Entidade

User {
  id: string
  nickname: string
  email: string
  password: string
  posts: array
  createdAt: string
}

Post {
  id: string
  content: string
  createdAt: string
}

## Casos de uso

- Deve ser possível criar um usuário, passando: email, password, nickname
- Deve ser possível atualizar um usuário
- Deve ser possível busca um usuário
- Deve ser possível buscar um usuário pelo id
- Deve ser possível buscar um usuário pelo email
- Deve ser possível criar um post relacionado a um usuário, passando: content
*/

let userCount = 0
let postCount = 0

class Post {
  id
  content
  createdAt

  constructor(content) {
    this.id = postCount++
    this.content = content
    this.createdAt = new Date()
  }
}

class User {
  id
  nickname
  email
  password
  posts
  createdAt

  constructor(data) {
    this.id = userCount++
    this.nickname = data.nickname
    this.email = data.email
    this.password = data.password
    this.posts = []
    this.createdAt = new Date()
  }
}

class UserRepository {
  repository = []
  
  createUser(data) {
    const user = new User(data)
    this.repository.push(user)
    return user
  }

  createPost(userId, postContent) {
    const user = this.repository.find((user) => user.id === userId)
    if (!user) {
      return 'User not found'
    }
    const post = new Post(postContent)
    user.posts.push(post)
    return post
  }

  listUsers() {
    return this.repository
  }

  getUserById(userId) {
    const user = this.repository.find((user) => user.id === userId)
    if (!user) {
      return 'User not found'
    }
    return user
  }
}

const userRepository = new UserRepository()
userRepository.createUser({
    nickname: 'viktor',
    email: 'victor@email.com',
    password: '123456',
})
userRepository.createUser({
    nickname: 'elizabete01',
    email: 'elizabete@email.com',
    password: '123456',
})
userRepository.createUser({
    nickname: 'carlos',
    email: 'carlos@email.com',
    password: '123456',
})
userRepository.createUser({
    nickname: 'mozar',
    email: 'mozar@email.com',
    password: '123456',
})
userRepository.createUser({
    nickname: 'jose',
    email: 'jose@email.com',
    password: '123456',
})
userRepository.createUser({
    nickname: 'gabriel',
    email: 'gabriel@email.com',
    password: '123456',
})

userRepository.createPost(1, 'Primeiro post')
userRepository.createPost(1, 'Segundo post')

console.log(userRepository.getUserById(1))
