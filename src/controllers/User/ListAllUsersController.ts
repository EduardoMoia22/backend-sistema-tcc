import { Request, Response } from "express";
import { makeListAllUsers } from "../../Factories/User/ListAllUsersFactory";

export class ListAllUsersController{
    async handle(req: Request, res: Response){
        return res.json(await makeListAllUsers().execute())
    }
}