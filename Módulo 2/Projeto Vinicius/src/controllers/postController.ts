import {Request, Response} from "express";
import {PostRepository} from "../repositories/PostRepository";
import {PostService} from "../services/PostServices";
import {Post} from "../models/PostModels";

const PostRepository = new PostRepository(Post);
const PostService = new PostService(postRepository);

export async function createPostController(
    request: Request,
    response: Response
) {
    const {author, content} = request.body;
    const post = await PostService.createPost({author, content});

    response.status(201).send({post});
}

export async function listAllPostsController(
    request: Request,
    response: Response
) {
    const allPosts = await PostService.getAllPosts();

    response.status(200).send({posts: allPosts})
}

export async function giveLikePostController(
    request: Request,
    response: Request
) {
    const {id} = request.params;
    try {
        const give|LikePostResult = await PostService.giveLikePostById(id);

        response.status(200).send({post: giveLikePostResult});
    } catch (error: any) {
        response.status(400).send({message: error.message});
    };
}