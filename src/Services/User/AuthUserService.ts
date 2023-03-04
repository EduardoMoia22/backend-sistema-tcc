import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IUserRepository } from "../../Repositories/UserRepository";

type AuthUserRequest = {
    email: string
    password: string
}

export class AuthUserService{
    private readonly userRepository: IUserRepository

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository
    }

    async execute({ email, password }: AuthUserRequest){
        const user = await this.userRepository.FindByEmail(email)

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Usuário/Senha inválidos")
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '1d'
            }
        )

        return{
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}