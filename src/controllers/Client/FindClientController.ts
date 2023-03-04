import { Request, Response } from "express";
import { makeFindClient } from "../../Factories/Client/FindClientFactory";
import { FindClientService } from "../../Services/Client/FIndClienteService";

export class FindClientController{
    async handle(req: Request, res: Response){
        const { id } = req.params

        return res.json(await makeFindClient().execute(id))
    }
}