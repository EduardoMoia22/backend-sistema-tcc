import { Request, Response } from "express";
import { makeListAllClients } from "../../Factories/Client/ListAllClientsFactory";
import { ListAllClientsService } from "../../Services/Client/ListAllClientsService";

export class ListAllClientsController{
    async handle(req: Request, res: Response){
        return res.json(await makeListAllClients().execute())
    }
}