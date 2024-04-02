import mongoose from "mongoose";

export interface IPost {
  author: mongoose.Types.ObjectId;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

// DTO: Data Transfer Object
export interface IPostDTO {
  author: mongoose.Types.ObjectId;
  content: string;
}
