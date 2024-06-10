import { Request, Response } from 'express';
import { RoomRepository } from '../repositories/RoomRepository';
import { Room } from "../models/RoomModel";
import { RoomService } from '../services/RoomService';
import { RoomCreate } from "../schemas/room";
import mongoose from "mongoose";

const roomRepository = new RoomRepository(Room);
const roomService = new RoomService(roomRepository);

export async function createRoom(request: Request, response: Response) {
    try {
        const { number_room, type, guest_capacity, daily_rate, photo } = request.body;  

        const roomData = {
            number_room,
            type,
            guest_capacity,
            daily_rate,
            photo,
            status: 'available',
        };

        const validData = await RoomCreate.schema.validate({ body: roomData });

        const newRoom = await roomService.createRoom({
            number_room: roomData.number_room,
            type: roomData.type,
            guest_capacity: roomData.guest_capacity,
            daily_rate: roomData.daily_rate,
            photo: roomData.photo,
            status: roomData.status
        });

        response.status(201).json(newRoom);
    } catch (error: any) {
        if (error.name === 'ValidationError') {
            return response.status(400).send({ message: error.errors });
        }
        response.status(500).send({ message: error.message });
    }
}

export async function updateRoomController(request: Request, response: Response) {
    try {
        const { id } = request.params;
        const { status } = request.body;

        const validStatuses = ["disponível", "ocupado", "em manutenção"];
        if (!validStatuses.includes(status)) {
            return response.status(400).send({ message: "Invalid status" });
        }

        const roomUpdateResult = await roomService.updateRoom(id, status);

        response.status(201).send({ room: roomUpdateResult });
    } catch (error: any) {
        response.status(400).send({ message: error.message });
    }
}

export async function listAvailableRooms(request: Request, response: Response) {
    try {
        const availableRooms = await roomService.listAvailableRooms();
        response.status(200).json(availableRooms);
    } catch (error: any) {
        response.status(500).send({ message: error.message });
    }
}

export async function listAvailableRoomsByDate(request: Request, response: Response) {
    try {
        const { checkin_date, checkout_date } = request.query;

        if (!checkin_date || !checkout_date) {
            return response.status(400).send({ message: "Check-in and check-out dates are required" });
        }

        const availableRooms = await roomService.listAvailableRoomsByDate(
            new Date(checkin_date as string),
            new Date(checkout_date as string)
        );
        response.status(200).json(availableRooms);
    } catch (error: any) {
        response.status(500).send({ message: error.message });
    }
}