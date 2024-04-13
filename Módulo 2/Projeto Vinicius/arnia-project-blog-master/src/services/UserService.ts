import bcrypt from 'bcrypt';

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
}
