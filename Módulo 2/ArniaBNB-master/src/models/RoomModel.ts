import { string } from "yup";
import { mongoose } from "../database";
import { IRoom } from "../entities/Room";

const roomSchema = new mongoose.Schema<IRoom>({
    number_room: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: "Individual",
    },
    guest_capacity: {
        type: Number,
        default: 1,
    },
    daily_rate: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Available",
    },
});

export const Room = mongoose.model<IRoom>("Room", roomSchema);
