import { Request, Response } from "express";
import * as yup from "yup"
import { AuthService } from "../services/auth-service";
import { UserRepository } from "../repositories/user-repository";
import { StatusCode } from "../utils/status-codes";

const repository = new UserRepository()
const service = new AuthService(repository)

export async function loginControler(req: Request, res: Response) {
  try {
    const { body } = req
    const bodyValidator = yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(6).max(8).required()
    })
    await bodyValidator.validate(body)
    const result = await service.login(body)
    return res.status(StatusCode.OK).json(result)
  } catch (err) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: err.message })
  }
}