import { IClientRepository } from "../../Repositories/ClientRepository";

export class DeleteClientService{
    private readonly clientRepository: IClientRepository 

    constructor(clientRepository: IClientRepository){
        this.clientRepository = clientRepository
    }

    async execute(id: string){
        const client = await this.clientRepository.FindById(parseInt(id))

        if(!client){
            throw new Error("Cliente não cadastrado")
        }

        return await this.clientRepository.Delete(client.id)
    }
}