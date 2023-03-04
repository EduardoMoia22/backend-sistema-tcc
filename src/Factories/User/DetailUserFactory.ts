import { UserRepository } from "../../Repositories/UserRepository";
import { DetailUserService } from "../../Services/User/DetailUserService";

export const makeDetailUser = (): DetailUserService => {
    return new DetailUserService(new UserRepository())
}