import { IClientRepository } from "../../Repositories/ClientRepository";
import { CLienteSchemaWithId } from "../../Schemas/Schemas";

export class UpdateClientService{
    private readonly clientRepository: IClientRepository

    constructor(clientRepository: IClientRepository){
        this.clientRepository = clientRepository
    }
    
    async execute({id, name, fantasy, birthday, fundation, cpf, cnpj}: CLienteSchemaWithId){
        const client = await this.clientRepository.Update({
            id,
            name,
            fantasy,
            birthday,
            fundation,
            cnpj,
            cpf
        })

        return client
    }
}