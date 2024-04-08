import { mongoose } from 'mongoose';
import { IReserva, IReservaDTO } from "../entities/Reserva";
import { ReservaRepository } from "../repositories/ReservaRepository";

export class ReservaService {
    private reservaRepository: ReservaRepository;
    constructor(repository: ReservaRepository) {
        this.reservaRepository = repository;
    }

    async createReserva(reservaData: IReservaDTO): Promise<IReserva> {
        return await this.reservaRepository.createReserva(reservaData);
    }
}