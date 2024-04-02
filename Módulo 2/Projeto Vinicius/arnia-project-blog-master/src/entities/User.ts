import mongoose from "mongoose";
import { IPost } from "./Post";

export interface IUser {
  fullName: string;
  nickname: string;
  email: string;
  posts: Array<mongoose.Types.ObjectId>;
}

export interface IUserWithPosts {
  fullName: string;
  nickname: string;
  email: string;
  posts: Array<IPost>;
}

// DTO: Data Transfer Object
export interface IUserDTO {
  fullName: string;
  nickname: string;
  email: string;
}
