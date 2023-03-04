import { IUserRepository } from "../../Repositories/UserRepository";

export class DetailUserService{
    private readonly userRepository: IUserRepository

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository
    }

    async execute(id: string){
        return await this.userRepository.FindById(id) 
    }
}