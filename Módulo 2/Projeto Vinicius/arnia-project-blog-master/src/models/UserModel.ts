import { mongoose } from "../database";
import { IUser } from "../entities/User";

const UserSchema = new mongoose.Schema<IUser>({
  fullName: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export const User = mongoose.model("User", UserSchema);
