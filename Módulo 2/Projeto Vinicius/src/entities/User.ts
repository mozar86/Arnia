import mongoose from "mongoose";

export interface IUser {
    fullName: string;
    nickname: string;
    email: string;
    posts: Array<mongoose.Schema.Types.ObjectId>
}

export interface IUserDTO {
    fullName: string;
    nickname: string;
    email: string;
}