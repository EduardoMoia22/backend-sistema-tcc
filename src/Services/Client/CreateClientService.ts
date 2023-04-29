import { IClientRepository } from "../../Repositories/ClientRepository";
import { CPFValidation } from "../../Utils/Validations";

type CreateClientProps = {
    name: string
    fantasy: string
    cpf: string
    cnpj: string
    birthday: string
    fundation: string
}

export class CreateClientService{
    private readonly clientRepository: IClientRepository

    constructor(clientRepository: IClientRepository){
        this.clientRepository = clientRepository
    }

    async execute({name, fantasy, cpf, cnpj, birthday, fundation}: CreateClientProps){
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