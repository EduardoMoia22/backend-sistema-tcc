import { ClientRepository } from "../../Repositories/ClientRepository";
import { CreateClientService } from "../../Services/Client/CreateClientService";

export const makeCreateClient = (): CreateClientService => {
    const clientRepository = new ClientRepository()

    return new CreateClientService(clientRepository)
}