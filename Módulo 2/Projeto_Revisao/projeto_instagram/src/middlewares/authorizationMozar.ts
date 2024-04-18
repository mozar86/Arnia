//import {Request, Response} from 'express';
//import jwt from 'jsonwebtoken';
import {findUserByNickname, verifyPssword} from '../repositories/UserRepository';
import {User} from '../entities/User';

const generateToken = (user: User): string => {}