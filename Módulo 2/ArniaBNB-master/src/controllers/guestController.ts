import { Request, Response } from "express";
import { GuestRepository } from "../repositories/GuestRepository";
import { Guest } from "../models/GuestModel";
import { GuestService } from "../services/GuestService";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const guestRepository = new GuestRepository(Guest);
const guestService = new GuestService(guestRepository);

export async function createGuestController(
    request: Request,
    response: Response
) {
    const { name, cpf, phone_number, email, password } = 
    request.body;
    try {
        const guest = await guestService.createGuest({
            name,
            cpf,
            phone_number,
            email,
            password
        });
        return response.status(201).send({ guest });
    } catch (error: any) {
        response.status(400).send({ message: error.message });        
    }
}

export async function authGuestController(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
        const token = await guestService.authGuest(email, password);
        return response.status(200).send({ token });
    } catch (error: any) {
        response.status(400).send({ message: error.message });
    }  
}

export async function loginGuest(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        const guest = await Guest.findOne({ email });
        if (!guest) {
            return res.status(400).send({ message: 'Invalid email or password' });
        }

        const validPassword = await bcrypt.compare(password, guest.password);
        if (!validPassword) {
            return res.status(400).send({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: guest._id }, process.env.JWT_SECRET || 'secretKey', {
            expiresIn: '1h',
        });

        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
}