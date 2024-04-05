import { mongoose } from '../database';
import { IUser } from './entities/User';

const userSchema = new mongoose.Schema<IUser>({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        Type: mongoose.Schema.Types.ObjectId,
    }
});

export const User = mongoose.model("User", userSchema);