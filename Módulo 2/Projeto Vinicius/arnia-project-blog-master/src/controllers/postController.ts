import { Request, Response } from "express";

import { PostRepository } from "../repositories/PostRepository";
import { PostService } from "../services/PostService";
import { Post } from "../models/PostModel";
import { mongoose } from "../database";

const postRepository = new PostRepository(Post);
const postService = new PostService(postRepository);

export async function createPostController(
  request: Request,
  response: Response
) {
  try {
    const { author, content } = request.body;
    
    const authorId = new mongoose.Types.ObjectId(author);
    const post = await postService.createPost({ author: authorId, content });

    response.status(201).send({ post });
  } catch (error: any) {
    response.status(400).send({message: error.message})
  }
}

export async function updatePostController( //2- Criou o controller
  request: Request,
  response: Response
) {
  try {
    const { content } = request.body;
    const { postId } = request.params;
    
    const id = new mongoose.Types.ObjectId(postId);

    const postUpdateResult = await postService.updatePost(id, content); //8- Criou a chamada do serviço

    response.status(201).send({ post: postUpdateResult });
  } catch (error: any) {
    response.status(400).send({message: error.message})
  }
}

export async function listAllPostsController(
  request: Request,
  response: Response
) {
  const allPosts = await postService.getAllPosts();

  response.status(200).send({ posts: allPosts });
}

export async function giveLikePostController(
  request: Request,
  response: Response
) {
  const { id } = request.params;
  try {
    const giveLikePostResult = await postService.giveLikePostById(id);

    response.status(200).send({ post: giveLikePostResult });
  } catch (error: any) {
    response.status(400).send({ message: error.message });
  }
}

export async function deletePostController(
  request: Request,
  response: Response
) {
  const { id } = request.params;
  const postId = new mongoose.Types.ObjectId(id);

  try {
    const wasPostDeleted = await postService.deletePost(postId);
    if (wasPostDeleted) {
      response.status(204).send();
    }
  } catch (error: any) {
    response.status(400).send({ message: error.message });
  }
}

export async function listPostByAuthorController(
  request: Request,
  response: Response
) {
  const { authorId } = request.params;
  const authorIdObject = new mongoose.Types.ObjectId(authorId);

  try {
    const posts = await postService.getPostsByAuthorId(authorIdObject);
    response.status(200).send({ posts });
  } catch (error: any) {
    response.status(400).send({ message: error.message });
  }
}
