import { ClientRepository } from "../../Repositories/ClientRepository";
import { FindClientService } from "../../Services/Client/FIndClienteService";

export const makeFindClient = (): FindClientService => {
    const clientRepository = new ClientRepository()
    
    return new FindClientService(clientRepository)
}