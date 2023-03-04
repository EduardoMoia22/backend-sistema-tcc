import { Request, Response } from "express";
import { makeCreateClient } from "../../Factories/Client/CreateClientFactory";
import { CreateClientService } from "../../Services/Client/CreateClientService";

export class CreateClientController{
    async handle(req: Request, res: Response){
        const {name, fantasy, cpf, cnpj, birthday, fundation} = req.body

        return res.json(await makeCreateClient().execute({
            name, 
            fantasy,
            cpf,
            cnpj,
            birthday,
            fundation
        }))
    }
}