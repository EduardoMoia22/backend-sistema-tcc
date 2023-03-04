import { Request, Response } from "express";
import { makeUpdateClient } from "../../Factories/Client/UpdateClientFactory";
import { UpdateClientService } from "../../Services/Client/UpdateClienteService";

export class UpdateClientController{
  async handle(req: Request, res: Response){
    const {
            id,
            name,
            fantasy,
            cpf,
            cnpj,
            fundation,
            birthday
          } = req.body

    res.send(await makeUpdateClient().execute({
      id,
      name,
      fantasy,
      cpf,
      cnpj,
      fundation,
      birthday
    }))
  }
} 