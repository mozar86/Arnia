import { InputCreateCustomDTO } from "../dtos/create-custom-list-dto";
import { CustomListRepository } from "../repositories/custom-list-repository";
import { UserRepository } from "../repositories/user-repository";

export class CustomListService {
  constructor(
    private customListRepository: CustomListRepository,
    private userRepository: UserRepository
  ) {}

  async create(input: InputCreateCustomDTO) {
    const user = await this.userRepository.getById(input.user)
    if (!user) {
      throw new Error("User not found")
    }
    const customList = await this.customListRepository.create(input)
    return customList
  }
}