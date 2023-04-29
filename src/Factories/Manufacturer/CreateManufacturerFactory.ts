import { ManufacturerRepository } from "../../Repositories/ManufacturerRepository";
import { CreateManufacturerService } from "../../Services/Manufacturer/CreateManufacturerService";

export const makeCreateManufacturer = (): CreateManufacturerService => {
    const manufacturerRepository = new ManufacturerRepository()

    return new CreateManufacturerService(manufacturerRepository)
}