import { Request, Response } from "express";
import * as yup from "yup"
import { StatusCode } from "../utils/status-codes";
import { CustomListService } from "../services/custom-list-service";
import { UserRepository } from "../repositories/user-repository";
import { CustomListRepository } from "../repositories/custom-list-repository";

const userRepository = new UserRepository()
const customListRepository = new CustomListRepository()
const service = new CustomListService(customListRepository, userRepository)

export async function createCustomListCotroller(req: Request, res: Response) {
  try {
    const { params, body, file } = req
    const inputValidator = yup.object({
      title: yup.string().required(),
      description: yup.string().required(),
      user: yup.string().required(),
      imageBanner: yup.string().required(),
    })
    const data = { ...params, ...body, imageBanner: file?.filename }
    await inputValidator.validate(data)
    const result = await service.create(data)
    return res.status(StatusCode.CREATED).json(result)
  } catch (err) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: err.message })
  }
}