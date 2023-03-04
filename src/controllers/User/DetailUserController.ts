import { Request, Response } from "express";
import { makeDetailUser } from "../../Factories/User/DetailUserFactory";

export class DetailUserController{
    async handle(req: Request, res: Response){
        const id = req.query.id as string

        return res.json(await makeDetailUser().execute(id))
    }
}