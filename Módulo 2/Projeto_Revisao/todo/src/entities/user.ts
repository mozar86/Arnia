import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  fullname: { type: String, min: 2 },
  email: { type: String, unique: true },
  password: { type: String, min: 6, max: 8 }
}, { timestamps: true })

export const UserModel = mongoose.model("User", UserSchema)