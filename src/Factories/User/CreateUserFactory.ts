import { UserRepository } from "../../Repositories/UserRepository";
import { CreateUserService } from "../../Services/User/CreateUserService";

export const makeCreateUser = (): CreateUserService => {
    const userRepository = new UserRepository()
    
    return new CreateUserService(userRepository)
}