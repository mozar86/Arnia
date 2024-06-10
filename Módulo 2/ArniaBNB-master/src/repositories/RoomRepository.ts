import { IRoom, IRoomDTO } from "../entities/Room";
import { mongoose } from "../database";
import { Booking } from "../models/BookingModel";

export class RoomRepository {
    private roomModel: mongoose.Model<IRoom>;
    constructor(roomModel: mongoose.Model<IRoom>) {
        this.roomModel = roomModel;
    }

    async createRoom(roomData: IRoomDTO): Promise<IRoom> {
        const newRoom = await this.roomModel.create(roomData);
        return newRoom;
    }

    async findRoomById(roomId: string): Promise<IRoom | null> {
        return this.roomModel.findById(roomId).exec();
    }

    async updateRoomById(roomId: string, status: string): Promise<IRoom | null> {
        return this.roomModel
        .findOneAndUpdate(
            { 
                _id: roomId,
            },
            {
                status
            },
            {
                new: true,
            }
        ).exec();
    }

    async findRoomByStatus(): Promise<IRoom[]> {
        return this.roomModel.find({ status: 'disponível' }).exec();
    }

    async findAvailableRoomsByDate(checkin_date: Date, checkout_date: Date): Promise<IRoom[]> {
        const rooms = await this.roomModel.find({ status: "available" }).exec();

        const bookings = await Booking.find({
            $or: [
                { checkin_date: { $lte: checkout_date }, checkout_date: { $gte: checkin_date } },
                { checkin_date: { $gte: checkin_date, $lte: checkout_date } },
                { checkout_date: { $gte: checkin_date, $lte: checkout_date } }
            ],
            status: { $in: ["confirmed", "in progress"] }
        }).exec();

        const bookedRoomIds = bookings.map(booking => booking.id_room.toString());

        return rooms.filter(room => !bookedRoomIds.includes(room._id.toString()));
    }
}
