import mongoose from "mongoose";

export interface IRoom {
    id: string;
    number_room: string;
    type: string;
    guest_capacity: number;
    daily_rate: string;
    photo: string;
    status: string;
}

export interface IRoomDTO {
    number_room: string;
    type: string;
    guest_capacity: number;
    daily_rate: string;
    photo: string;
    status: string;
}
