import mongoose from 'mongoose';

export interface IReserva {
    numeroReserva: number;
    nomeHospede: string;
    dataCheckIn: Date;
    dataCheckOut: Date;
    numeroQuarto: number;
    tipoQuarto: object;
    status: object; 
}

export interface IReservaDTO {
    nomeHospede: string;
    dataCheckIn: Date;
    dataCheckOut: Date;
    tipoQuarto: object;
}