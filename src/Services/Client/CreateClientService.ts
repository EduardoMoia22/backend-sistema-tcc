import { IClientRepository } from "../../Repositories/ClientRepository";
import { ClientSchema } from "../../Schemas/Schemas";
import { CPFValidation } from "../../Utils/Validations";

export class CreateClientService{
    private readonly clientRepository: IClientRepository

    constructor(clientRepository: IClientRepository){
        this.clientRepository = clientRepository
    }

    async execute({name, fantasy, cpf, cnpj, birthday, fundation}: ClientSchema){
        let formatedCPF = CPFValidation(cpf)

        const client = await this.clientRepository.Create({
            name, 
            fantasy, 
            formatedCPF, 
            cnpj,
            birthday,
            fundation
        })

        return client
    }
}