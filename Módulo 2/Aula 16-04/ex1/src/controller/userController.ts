import { UserModel } from '../model/UserModel'
import { UserRepository } from '../repositories/UserRepository'
import { UserService } from '../service/userService'
import {Request, Response} from 'express'
import * as yup from "yup"

const repository = new UserRepository(UserModel)
const service = new UserService(repository)

// magic numbers
const result = 100 * 60

const HTTP_STATUS = {
    CREATED : 201,
    BAD_REQUEST : 400
}

enum HttpStatusEnum {
    CREATED = 201,
    BAD_REQUEST = 400,
    SUCCESS = 200
}

export async function createUserController( req: Request, res: Response) {
    try{
        const { body } = req
        // schema
        const bodyValidator = yup.object({
            nickname: yup.string(),
            email: yup.string().email(),
            password: yup.string(),
        })
        // const bodyValidator = yup.object().shape({
        //     nickname: yup.string(),
        //     email: yup.string().email(),
        //     password: yup.string(),
        // })
        // validation
        await bodyValidator.validate(body)
        const result = await service.createUserService(body)
        return res.status(HttpStatusEnum.CREATED).json({ result })
    } catch(error: any) {
        return res.status(HttpStatusEnum.BAD_REQUEST).json({
            message: error.message
        })
    }

    
}

export async function findAllUsersController( req: Request, res: Response){
    try {
        const allUsers = await service.findAllUsers()

        res.status(HttpStatusEnum.CREATED).send({ users: allUsers })
    } catch (error: any) {
        res.status(HttpStatusEnum.BAD_REQUEST).send({ message: error.message })
    }
}