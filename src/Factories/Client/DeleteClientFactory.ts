import { ClientRepository } from "../../Repositories/ClientRepository";
import { DeleteClientService } from "../../Services/Client/DeleteClientService";

export const makeDeleteClient = (): DeleteClientService => {
    const clientRepository = new ClientRepository()
    
    return new DeleteClientService(clientRepository)
}