import { mongoose } from "../database";
import { IComment } from "../entities/Comment";

const commentSchema = new mongoose.Schema<IComment>({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Post",
    },
    content: {
        
    },
    createdAt: {

    },
    updatedAt: {

    }
});