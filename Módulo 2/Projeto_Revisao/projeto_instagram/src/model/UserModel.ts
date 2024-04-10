import mongoose from "mongoose"
import { IUser } from "../entities/User"

const UserSchema = new mongoose.Schema<IUser>({
    nickname: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
})

export const UserModel = mongoose.model('Users',UserSchema)