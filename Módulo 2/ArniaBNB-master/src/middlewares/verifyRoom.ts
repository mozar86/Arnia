// src/middlewares/verifyRoomExists.ts
import { Request, Response, NextFunction } from 'express';
import { RoomRepository } from '../repositories/RoomRepository';
import { Room } from '../models/RoomModel';

const roomRepository = new RoomRepository(Room);

export const verifyRoomExists = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    const room = await roomRepository.findRoomById(id); 

    if (!room) {
      return response.status(404).json({ message: 'Room not found' });
    }


    
    next();
  } catch (error) {
    response.status(500).json({ message: 'Server error' });
  }
};
