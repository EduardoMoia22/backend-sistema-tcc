import { IClientRepository } from "../../Repositories/ClientRepository";

export class ListAllClientsService {
    private readonly clientRepository: IClientRepository

    constructor(clientRepository: IClientRepository){
        this.clientRepository = clientRepository
    }

    async execute(){
        const client = await this.clientRepository.ListAll()

        return client
    }
}