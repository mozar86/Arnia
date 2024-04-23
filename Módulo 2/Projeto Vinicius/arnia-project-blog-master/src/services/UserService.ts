import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { IUser, IUserDTO, IUserWithPosts } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  private userRepository: UserRepository;
  constructor(repository: UserRepository) {
    this.userRepository = repository;
  }

  async createUser(userData: IUserDTO): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(userData.password, 8)
    return this.userRepository.createUser({
      ...userData,
       password: hashedPassword
    });
  }

  async getAllUsers(): Promise<IUserWithPosts[]> {
    return this.userRepository.getAllUsers();
  }

  async authUser(email: string, password: string) {
    // 1- Buscar um user com o email passado pelo usuário
    const existUser = await this.userRepository.findUserByEmail(email)
    // Se não tiver, dispara erro
    if (!existUser) {
      throw new Error(`Not exists a user with email ${email}`);
    }
    // 2- Comparar se a senha é compatível com a senha armazenada criptografada
    const isThePasswordSame = await bcrypt.compare(password, existUser.password)
    // Se não for, dispara erro
    if (!isThePasswordSame) {
      throw new Error(`Passwords not match!`);
    }
    // 3- Vou criar um JWT para enviar para o meu usuário
    const tokenPayload = {
      sub: existUser._id
    }
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY || "", {
      expiresIn: '2h',
    });

    return token;
  }
}
