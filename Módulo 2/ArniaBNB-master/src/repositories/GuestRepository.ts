import { mongoose } from "../database";
import { IGuest, IGuestDTO } from "../entities/Guest";
import { Booking } from "../models/BookingModel";

export class GuestRepository {
    guestModel: mongoose.Model<IGuest>;
    constructor(guestModel: mongoose.Model<IGuest>) {
        this.guestModel = guestModel;
    }

    async createGuest(guestData: IGuestDTO): Promise<IGuest> {
        return this.guestModel.create(guestData);
    }

    async findGuestByEmail(email: string): Promise<IGuest & 
    {
        _id: mongoose.Types.ObjectId;
    } | null> {
        return this.guestModel.findOne({ email }).exec();
    }
}
