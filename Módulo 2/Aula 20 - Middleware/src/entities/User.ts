import mongoose from 'mongoose';

export interface IUser {
    name: String;
    email: String;
    password: String;
    photo: mongoose.Types.ObjectId;
}

export interface IUserDTO {
    
}