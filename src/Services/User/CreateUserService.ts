import { IUserRepository } from "../../Repositories/UserRepository";
import { UserSchema } from "../../Schemas/Schemas";
import { EmailValidation, EncryptPassword } from "../../Utils/Validations";

export class CreateUserService{
    private readonly userRepository: IUserRepository

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository
    }

    async execute({name, email, password}: UserSchema){
        EmailValidation(email)
        
        const hashPassword = await EncryptPassword(password)

        const user = await this.userRepository.Create({
            name,
            email,
            hashPassword
        })

        return user
    }
}