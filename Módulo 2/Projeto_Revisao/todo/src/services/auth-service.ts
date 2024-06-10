import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { InputLoginDTO, OutputLoginDTO } from "../dtos/login-dto";
import { UserRepository } from "../repositories/user-repository";

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(params: InputLoginDTO): Promise<OutputLoginDTO> {
    // 1. Buscar o usuário pelo e-mail no banco de dados
    // 2. Comparar a senha que o usuário enviou com a senha do bando de dados
    // 3. Gerar o token
    const user = await this.userRepository.getByEmail(params.email)
    if (!user) {
      throw new Error("Invalid e-mail/password")
    }

    const passwordIsValid = await bcrypt.compare(params.password, user.password as string)
    if (!passwordIsValid) {
      throw new Error("Invalid e-mail/password")
    }

    const token = jwt.sign(
      { id: user.id, fullname: user.fullname },
      process.env.SECRET_KEY as string,
      { expiresIn: '5m' }
    )

    return { token }
  }
}