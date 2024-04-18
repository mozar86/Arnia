import mongoose from "mongoose";
import { IPost, IPostDTO } from "../entities/Post";

export class PostRepository{
    postModel: mongoose.Model<IPost> 
    constructor(postModel: mongoose.Model<IPost>){
        this.postModel = postModel
    }

    async createPost({author, content}: IPostDTO): Promise<IPost>{
        const newPost = await this.postModel.create({author, content});
        return newPost
    }
}

