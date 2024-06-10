import { RoomRepository } from "../repositories/RoomRepository";
import { BookingRepository } from "../repositories/BookingRepository";
import { IBooking, IBookingDTO } from "../entities/Booking";
import { mongoose } from "../database";

export class BookingService {
    private roomRepository: RoomRepository;
    private bookingRepository: BookingRepository;

    constructor(roomRepository: RoomRepository, bookingRepository: BookingRepository) {
        this.roomRepository = roomRepository;
        this.bookingRepository = bookingRepository;
    }

    async createBooking(bookingData: IBookingDTO): Promise<IBooking> {
        const room = await this.roomRepository.findRoomById(bookingData.id_room);

        if (!room) {
            throw new Error("Room not found");
        }

        if (room.guest_capacity < bookingData.guests) {
            throw new Error("Number of guests exceeds room capacity");
        }

        const existingBookings = await this.bookingRepository.findBookingsByRoomAndDate(
            new mongoose.Types.ObjectId(bookingData.id_room),
            bookingData.checkin_date,
            bookingData.checkout_date
        );

        if (existingBookings.length > 0) {
            throw new Error("Room is already booked for the selected dates");
        }

        const newBooking = await this.bookingRepository.createBooking({
            ...bookingData,
            status: "confirmed"
        });

        return newBooking;
    }

    async cancelBooking(bookingId: string): Promise<void> {
        const booking = await this.bookingRepository.findBookingById(new mongoose.Types.ObjectId(bookingId));

        if (!booking) {
            throw new Error("Booking not found");
        }

        if (booking.status === "in progress") {
            throw new Error("Cannot cancel a booking that is in progress");
        }

        await this.bookingRepository.updateBookingStatus(bookingId, "canceled");
    }

    async listBookingsByGuest(guestId: string): Promise<IBooking[]> {
        return this.bookingRepository.findBookingsByGuest(guestId);
    }
}
