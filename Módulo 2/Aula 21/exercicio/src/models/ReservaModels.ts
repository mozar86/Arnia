import { mongoose } from "../database";
import { IReserva } from "../entities/Reserva";

const reservaSchema = new mongoose.Schema<IReserva>({
    numeroReserva: {
        type: Number
    },
    nomeHospede: {
        type: String
    },
    dataCheckIn: {
        type: Date
    },
    dataCheckOut: {
        type: Date
    },
    numeroQuarto: {
        type: Number
    },
    tipoQuarto: {
        type: Object
    },
    status: {
        type: Object
    } 
});

export const Reserva = mongoose.model("Reserva", reservaSchema);