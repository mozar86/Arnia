import { PostModel } from '../model/PostModel'
import { PostRepository } from '../repositories/PostRepository'
import { PostService } from '../service/PostService'
import {Request, Response} from 'express'
import * as yup from "yup"

const repository = new PostRepository(PostModel)
const service = new PostService(repository)

export async function createPostController( req: Request, res: Response){
    const {body} = req
    try {
        const newPost = await service.createPostService({
          author: body.author,
          content: body.content
        })
        return res.status(201).send(newPost)
    } catch (error: any) {
        console.log(error)
        return res.status(400).send({message: error.message})
    }
}