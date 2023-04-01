import { IClientRepository } from "../../Repositories/ClientRepository";

export class FindClientService{
    private readonly clientRepository: IClientRepository

    constructor(clientRepository: IClientRepository){
        this.clientRepository = clientRepository
    }

    async execute(id: number){
        const client = await this.clientRepository.FindById(id)

        if(!client){
            throw new Error("Cliente não cadastrado.")
        }

        return client
    }
}