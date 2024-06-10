//Representa um hóspede do hotel
import mongoose from "mongoose";
import { IBooking } from "./Booking";


export interface IGuest {
    id: mongoose.Types.ObjectId;
    name: string;
    cpf: string;
    phone_number: number; 
    email: string;
    password: string;
    bookings: Array<mongoose.Types.ObjectId>;
}

export interface IGuestWithBooking {
    id: mongoose.Types.ObjectId;
    name: string;
    cpf: string;
    phone_number: number; 
    email: string;
    password: string;
    bookings: Array<IBooking>;
}

export interface IGuestDTO {
    name: string;
    cpf: string;
    phone_number: number; 
    email: string;
    password: string;
}