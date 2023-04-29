import { IUserRepository } from "../../Repositories/UserRepository";

export class DetailUserService{
    private readonly userRepository: IUserRepository

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository
    }

    async execute(id: string){
        const userExists = await this.userRepository.FindById(id)
        
        if(!userExists){
            throw new Error("Usuário não cadastrado")
        }

        return await this.userRepository.FindById(id) 
    }
}