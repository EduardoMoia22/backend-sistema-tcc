import { ClientRepository } from "../../Repositories/ClientRepository";
import { UpdateClientService } from "../../Services/Client/UpdateClienteService";

export const makeUpdateClient = (): UpdateClientService => {
    const clientRepository = new ClientRepository()
    
    return new UpdateClientService(clientRepository)
}