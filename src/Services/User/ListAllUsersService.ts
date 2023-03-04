import { IUserRepository } from "../../Repositories/UserRepository";

export class ListAllUsersService{
    private readonly userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }    

  async execute(){
    return await this.userRepository.ListAll()
  }

}