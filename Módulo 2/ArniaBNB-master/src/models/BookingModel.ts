import { mongoose } from "../database";
import { IBooking } from "../entities/Booking";

const BookingSchema = new mongoose.Schema<IBooking>({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    checkin_date: {
        type: Date,
        default: Date.now,
    },
    checkout_date: {
        type: Date,
        default: Date.now,
    },
    guests: [{
        type: Number,
    }],
    id_room: [{
       type: String,
       required: true, 
    }],
    id_guest: [{
        type: String,
        required: true,
    }],
    status: {
        type: String,
        required: true,
    },
})

export const Booking = mongoose.model("Booking", BookingSchema);

