import { ClientRepository } from "../../Repositories/ClientRepository";
import { ListAllClientsService } from "../../Services/Client/ListAllClientsService";

export const makeListAllClients = (): ListAllClientsService => {
    const clientRepository = new ClientRepository()
    
    return new ListAllClientsService(clientRepository)
}