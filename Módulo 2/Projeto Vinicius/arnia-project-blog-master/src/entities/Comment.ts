import mongoose, { ObjectId } from "mongoose";

export interface IComment {
    post: mongoose.Types.ObjectId;
    content: { string: string, required: true, minLength: 3};
    createdAt: Date;
    updatedAt: Date
}

export interface ICommentDTO {
    post: mongoose.Types.ObjectId;
    content: { string: string, required: true, minLength: 3};
}