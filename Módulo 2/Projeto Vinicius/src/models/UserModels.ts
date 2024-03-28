import { mongoose } from "../database";

const UserSchema = new mongoose.Schema<IUser>({
    fullName: {
        type: String,
        required: true
    },
    nickame: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    posts: [
        { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Post' 
        }
    ]
});

export const User = mongoose.model("Post", postSchema);