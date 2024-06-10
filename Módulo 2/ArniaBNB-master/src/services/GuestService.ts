import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { IGuest, IGuestDTO } from '../entities/Guest';
import { GuestRepository } from '../repositories/GuestRepository';

export class GuestService {
    private guestRepository: GuestRepository;
    constructor(repository: GuestRepository) {
        this.guestRepository = repository;
    }

    async createGuest(guestData: IGuestDTO): Promise<IGuest> {
        const existingGuest = await this.guestRepository.findGuestByEmail(guestData.email);
        if (existingGuest) {
            throw new Error(`A guest with email ${guestData.email} already exists.`);
        }

        const hashedPassword = await bcrypt.hash(guestData.password, 8)

        return this.guestRepository.createGuest({
            ...guestData,
            password: hashedPassword
        });
    }

    async authGuest(email: string, password: string) {
        const existGuest = await this.guestRepository.findGuestByEmail(email)

        if (!existGuest) {
            throw new Error(`Not exists a guest with email ${email}`); 
        }

        const isThePasswordSame = await bcrypt.compare(password, existGuest.password)

        if (!isThePasswordSame) {
            throw new Error(`Passwords not match!`);
        }

        const tokenPayload = {
            sub: existGuest._id
        }

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY || "", {
            expiresIn: '3h',
        });

        return token;
    }
}