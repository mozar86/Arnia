import * as yup from "yup";
import { Request, Response } from "express";

import { UserService } from "../services/user-service";
import { UserRepository } from "../repositories/user-repository";
import { StatusCode } from "../utils/status-codes";

const repository = new UserRepository()
const service = new UserService(repository)

export async function createUserController(req: Request, res: Response) {
  try {
    const { body } = req
    const bodyValidator = yup.object({
      email: yup.string().email().required(),
      fullname: yup.string().min(2).required(),
      password: yup.string().min(6).max(8).required()
    })
    await bodyValidator.validate(body)

    const result = await service.create(body)

    return res.status(StatusCode.CREATED).json(result)
  } catch (err: any) {
    if (err.message === "User already exists") {
      return res.status(StatusCode.CONFLICT).json({ message: err.message})
    }

    return res.status(StatusCode.BAD_REQUEST).json({ message: err.message})
  }
}
