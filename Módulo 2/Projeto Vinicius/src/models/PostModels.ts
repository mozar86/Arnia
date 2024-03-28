import { mongoose } from "../database";
import { IPost } from "../entities/Post";

const postSchema = new mongoose.Schema<IPost>({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})