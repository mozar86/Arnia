import { mongoose } from "../database";
import { IGuest } from "../entities/Guest";

const GuestSchema = new mongoose.Schema<IGuest>({
    name: {
        type: String,
    },
    cpf: {
        type: String,
        unique: true,
    },
    phone_number: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    bookings: [{
        type: String,
        required: true,
    }],
})

export const Guest = mongoose.model("Guest", GuestSchema);