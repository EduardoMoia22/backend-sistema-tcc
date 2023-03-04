import { UserRepository } from "../../Repositories/UserRepository";
import { AuthUserService } from "../../Services/User/AuthUserService";

export const makeAuthUser = (): AuthUserService => {
    const userRepository = new UserRepository()
    
    return new AuthUserService(userRepository)
}