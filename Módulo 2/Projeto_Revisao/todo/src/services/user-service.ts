import bcrypt from "bcrypt"
import { ParamsCreateUserDTO } from "../dtos/create-user-dto";
import { UserRepository } from "../repositories/user-repository";

export class UserService {
  constructor(private repository: UserRepository) {}

  async create(params: ParamsCreateUserDTO) {
    const userAlreadyExists = await this.repository.getByEmail(params.email)
    if (userAlreadyExists) {
      throw new Error("User already exists")
    }
    const payload = {
      ...params,
      password: await bcrypt.hash(params.password, 8)
    }
    const user = await this.repository.create(payload)
    return user
  }
}