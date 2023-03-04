import { UserRepository } from "../../Repositories/UserRepository";
import { ListAllUsersService } from "../../Services/User/ListAllUsersService";

export const makeListAllUsers = (): ListAllUsersService => {
    return new ListAllUsersService(new UserRepository())
}