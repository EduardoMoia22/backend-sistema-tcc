import { IClientRepository } from "../../Repositories/ClientRepository";

type UpdateClientProps = {
    id: number
    name: string
    fantasy: string
    birthday: string
    fundation: string
    cpf: string
    cnpj: string
}


export class UpdateClientService{
    private readonly clientRepository: IClientRepository

    constructor(clientRepository: IClientRepository){
        this.clientRepository = clientRepository
    }
    
    async execute({id, name, fantasy, birthday, fundation, cpf, cnpj}: UpdateClientProps){
        const client = await this.clientRepository.FindById(id)

        if(!client){
            throw new Error("Cliente não cadastrado")
        }

        return await this.clientRepository.Update({
            id,
            name,
            fantasy,
            birthday,
            fundation,
            cnpj,
            cpf
        })
    }
}