import { Request, Response } from "express";
import { makeCreateUser } from "../../Factories/User/CreateUserFactory";
import { CreateUserService } from "../../Services/User/CreateUserService";

export class CreateUserController{
    async handle(req: Request, res: Response){
        const { name, email, password } = await req.body

        return res.json(await makeCreateUser().execute({
            name,
            email,
            password
        }))
    }
}