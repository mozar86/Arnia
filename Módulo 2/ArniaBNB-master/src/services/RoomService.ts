import { mongoose } from "../database";
import { IRoom, IRoomDTO } from "../entities/Room";
import { RoomRepository } from "../repositories/RoomRepository";

export class RoomService {
    private roomRepository: RoomRepository;
    constructor(repository: RoomRepository) {
        this.roomRepository = repository;
    }

    async createRoom(roomData: IRoomDTO): Promise<IRoom> {
        return await this.roomRepository.createRoom(roomData);
    }

    async updateRoom(roomId: string, status: string): Promise<IRoom> {
        const updateRoomResult = await this.roomRepository.updateRoomById(roomId, status);

        if (!updateRoomResult) {
            throw new Error("No room was found with the specified ID")
        }
        return updateRoomResult;
    }

    async listAvailableRooms(): Promise<IRoom[]> {
        return this.roomRepository.findRoomByStatus();
    }

    async listAvailableRoomsByDate(checkin_date: Date, checkout_date: Date): Promise<IRoom[]> {
        return this.roomRepository.findAvailableRoomsByDate(checkin_date, checkout_date);
    }
}
