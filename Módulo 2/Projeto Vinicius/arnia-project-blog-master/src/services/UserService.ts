import { IUser, IUserDTO, IUserWithPosts } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  private userRepository: UserRepository;
  constructor(repository: UserRepository) {
    this.userRepository = repository;
  }

  async createUser(userData: IUserDTO): Promise<IUser> {
    return this.userRepository.createUser(userData);
  }

  async getAllUsers(): Promise<IUserWithPosts[]> {
    return this.userRepository.getAllUsers();
  }
}
