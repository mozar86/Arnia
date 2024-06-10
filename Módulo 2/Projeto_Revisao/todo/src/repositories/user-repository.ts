import { Model } from "mongoose";
import { ParamsCreateUserDTO } from "../dtos/create-user-dto";
import { UserModel } from "../entities/user";

export class UserRepository {
  async getByEmail(email: string) {
    const user = await UserModel.findOne({ email })
    return user
  }

  async create(params: ParamsCreateUserDTO) {
    const user = await UserModel.create(params)
    return user
  }

  async getById(id: string) {
    const user = await UserModel.findById(id)
    return user
  }
}