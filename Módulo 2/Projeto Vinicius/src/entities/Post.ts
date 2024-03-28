import mongoose from "mongoose";

export interface IPost {
    author: mongoose.Schema.Types.ObjectId;
    content: string;
    likes: number;
    createdAt: Date;
    updateAt: Date;
}

export interface IPostDTO {
    author: mongoose.Schema.Types.ObjectId;
    content: string;
}