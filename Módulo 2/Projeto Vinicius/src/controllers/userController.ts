import {Request, Response} from "express";
import {PostRepository} from "../repositories/PostRepository";
import {PostService} from "../services/PostServices";
import {Post} from "../models/PostModels";

const PostRepository = new PostRepository(Post);
const PostService = new PostService(postRepository);

export async function createUserController(
    request: Request,
    response: Response
) {
    //const {author, content} = request.body;
    //const post = await PostService.createPost({author, content});

    response.status(201).send({ok: user});
}

