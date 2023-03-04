import { Request, Response } from "express";
import { makeAuthUser } from "../../Factories/User/AuthUserFactory";
import { AuthUserService } from "../../Services/User/AuthUserService";

export class AuthUserController{
    async handle(req: Request, res: Response){
        const { email, password } = await req.body

        return res.json(await makeAuthUser().execute({
            email, 
            password
        }))
    }
}