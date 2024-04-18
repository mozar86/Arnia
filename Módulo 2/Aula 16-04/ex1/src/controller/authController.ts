import { Request, Response } from "express";
import * as yup from "yup"
import { UserRepository } from "../repositories/UserRepository";
import { UserModel } from "../model/UserModel";
import { AuthService } from "../service/AuthService";

const userRepository = new UserRepository(UserModel)
const authService = new AuthService(userRepository)

export async function authController(req: Request, res: Response) {
  const { body } = req
  // schema
  const bodyValidator = yup.object({
    email: yup.string().email(),
    password: yup.string()
  })
  // validar
  try {
    await bodyValidator.validate(body)

    const result = await authService.login(body)
    return res.json(result)
  } catch(error: any) {
    return res.status(400).json({
      message: error.message
    })
  }
}