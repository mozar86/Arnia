import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { UserRepository } from "../repositories/UserRepository"

export class AuthService {
  constructor(
    private userRepository: UserRepository
  ) {}

  async login(params: { email: string, password: string}) {
    // 1. Recebe o login e senha do usuário
    const { email, password } = params
    // 2. Validar se existe um usuário com aquele login do banco de dados
    const userFromDatabase = await this.userRepository.findByEmail(email)
    //   a. Se não existir, retornamos um erro
    if (!userFromDatabase) {
      throw new Error('E-mail/password is invalid')
    }
    //   b. Se existir, continuar
    // 3. Validar se a senha que o usuário informou é a mesma que está no banco de dados
    const passwordIsValid = await compare(password, userFromDatabase.password)
    //   a. Se estiver errado, retornamos um erro
    if (passwordIsValid === false) {
      throw new Error('E-mail/password is invalid')
    }
    //   b. Se estiver certo, continuar
    // 4. Gerar o token -> token === crendencial
    //    a. payload -> informações que ficará disponível(público) na credencial
    //    b. secret_key -> assinatura da credencial
    //    c. options: tempo de expiração -> configurações da credencial
    const payload = { id: userFromDatabase.id, email: userFromDatabase.email }
    const secretKey = "rtedytfyguiopiiouwehfoqeuwfhoiwu"
    const options = { expiresIn: '15m' }
    const token = sign(payload, secretKey, options)
    // 5. Retornar o token
    return { token }
  }
}