//Representa o gerente do hotel
import mongoose from 'mongoose';

export interface IAdmin {
    emailAdmin: string;
    passwordAdmin: string;
}

export interface IAdminDTO {
    emailAdmin: string;
    passwordAdmin: string;
}