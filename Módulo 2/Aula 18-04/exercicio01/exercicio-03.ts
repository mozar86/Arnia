import { randomUUID } from "crypto"
import { hashSync } from "bcrypt"

interface User {
  id: string
  name: string
  email: string
  password: string
  posts: string[]
  createdAt: Date
}

interface CreateUserDTO {
  name: string
  email: string
  password: string
}

export class UserRepository {
  users: User[] = []

  create(data: CreateUserDTO) {
    const user = { id: randomUUID(), ...data, posts: [], createdAt: new Date() }
    this.users.push(user)
    return user
  }

  getByEmail(email: string): User | null {
    const user = this.users.find((u) => u.email === email)
    return user ?? null
  }

  getById(id: string): User | null {
    const user = this.users.find((u) => u.id === id)
    return user ?? null
  }

  pushPost(id: string, content: string) {
    const user = this.users.find((u) => u.id === id)
    if(!user) return null
    user.posts.push(content)
    return user ?? null
  }
}

export class UserService {
  constructor(
    private repository: UserRepository
  ) {}

  create(data: CreateUserDTO) {
    const userAlreadyExists = this.repository.getByEmail(data.email)
    if (userAlreadyExists) throw new Error("User already exists")
    const result = this.repository.create(
      { ...data, password: hashSync(data.password, 8) }
    )
    return result
  }

  findById(id: string) { 
    const user = this.repository.getById(id)
    return user
  }

  createPost(userId: string, postContent: string) {
    const user = this.repository.getById(userId)
    if (user) throw new Error("User not found")
    this.repository.pushPost(userId, postContent)
  }
}