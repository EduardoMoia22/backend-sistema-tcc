import { Request, Response } from "express";
import { makeDeleteClient } from "../../Factories/Client/DeleteClientFactory";
import { DeleteClientService } from "../../Services/Client/DeleteClientService";

export class DeleteClientController {
    async handle(req: Request, res: Response){
        const { id } = req.params

        return res.json(await makeDeleteClient().execute(id))
    }
}