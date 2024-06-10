import { Request, Response } from 'express';
import { BookingService } from '../services/BookingService';
import { RoomRepository } from '../repositories/RoomRepository';
import { BookingRepository } from '../repositories/BookingRepository';
import { Room } from '../models/RoomModel';
import { Booking } from '../models/BookingModel';
import { mongoose } from '../database';

const roomRepository = new RoomRepository(Room);
const bookingRepository = new BookingRepository(Booking);
const bookingService = new BookingService(roomRepository, bookingRepository);

export async function createBooking(request: Request, response: Response) {
    try {
        const { checkin_date, checkout_date, guests, id_room, id_guest, status } = request.body;
        
        const newBooking = await bookingService.createBooking({
            id: new mongoose.Types.ObjectId(), 
            checkin_date,
            checkout_date,
            guests,
            id_room,
            id_guest,
            status
        });

        response.status(201).json(newBooking);
    } catch (error: any) {
        response.status(400).send({ message: error.message });
    }
}

export async function cancelBooking(request: Request, response: Response) {
    try {
        const { id } = request.params;
        
        await bookingService.cancelBooking(id);

        response.status(200).send({ message: "Booking canceled successfully" });
    } catch (error: any) {
        response.status(400).send({ message: error.message });
    }
}

export async function listBookingsByGuest(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const bookings = await bookingService.listBookingsByGuest(id);
        response.status(200).json(bookings);
    } catch (error: any) {
        response.status(500).send({ message: error.message });
    }
}
