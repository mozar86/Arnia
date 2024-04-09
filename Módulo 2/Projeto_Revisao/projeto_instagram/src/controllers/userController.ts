import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../service/userService';
import { Request, Response } from 'express';
import * as yup from 'yup';

const repository = new UserRepository(UserModel)
const service = new UserService(repository)

export async function CreateUserController (req: Request, res: Response) {
    try {
        const {body} = req

        const bodyValidator = yup.object({
            nickname: yup.string(),
            email: yup.string().email(),
            password: yup.string(),

        await bodyValidator.validate(body)
        const result = await ServiceWorker.createUserService(body)
        return res.status(201).json({ result })
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}