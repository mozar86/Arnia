import mongoose from "mongoose";

export interface IBooking {
    id: mongoose.Types.ObjectId;
    checkin_date: Date;
    checkout_date: Date;
    guests: number;
    id_room: string;
    id_guest: string;
    status: string;
}

export interface IBookingDTO {
    id: mongoose.Types.ObjectId;
    checkin_date: Date;
    checkout_date: Date;
    guests: number;
    id_room: string;
    id_guest: string;
    status: string;
}