import mongoose from "mongoose"
import { IPost } from "../entities/Post"

const PostSchema = new mongoose.Schema<IPost>({
    author: { type:String, required:true },
    content: { type:String, required:true },
    like_users: [{type: String, }],
}, { timestamps: true })

export const PostModel = mongoose.model<IPost>('Post',PostSchema)