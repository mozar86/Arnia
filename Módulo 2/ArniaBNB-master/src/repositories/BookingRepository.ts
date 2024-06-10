import { mongoose } from "../database";
import { IBooking, IBookingDTO } from "../entities/Booking";

export class BookingRepository {
    private bookingModel: mongoose.Model<IBooking>;

    constructor(bookingModel: mongoose.Model<IBooking>) {
        this.bookingModel = bookingModel;
    }

    async createBooking(bookingData: IBookingDTO): Promise<IBooking> {
        const newBooking = await this.bookingModel.create(bookingData);
        return newBooking;
    }

    async findBookingsByRoomAndDate(roomId: mongoose.Types.ObjectId, checkin_date: Date, checkout_date: Date): Promise<IBooking[]> {
        return this.bookingModel.find({
            roomId,
            $or: [
                { checkin_date: { $lte: checkout_date, $gte: checkin_date } },
                { checkout_date: { $lte: checkout_date, $gte: checkin_date } }
            ]
        }).exec();
    }

    async findBookingById(bookingId: mongoose.Types.ObjectId): Promise<IBooking | null> {
        return this.bookingModel.findById(bookingId).exec();
    }

    async updateBookingStatus(bookingId: string, status: string): Promise<void> {
        await this.bookingModel.updateOne({ _id: new mongoose.Types.ObjectId(bookingId) }, { status }).exec();
    }

    async findBookingsByGuest(guestId: string): Promise<IBooking[]> {
        return this.bookingModel.find({ id_guest: guestId }).exec();
    }
}
