import { IClientRepository } from "../../Repositories/ClientRepository";

export class DeleteClientService{
    private readonly clientRepository: IClientRepository 

    constructor(clientRepository: IClientRepository){
        this.clientRepository = clientRepository
    }

    async execute(id: string){
        return await this.clientRepository.Delete(parseInt(id))
    }
}