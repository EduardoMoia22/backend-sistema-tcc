import { ManufacturerRepository } from "../../Repositories/ManufacturerRepository";
import { UpdateManufacturerService } from "../../Services/Manufacturer/UpdateManufacturerService";

export const makeUpdateManufacturer = (): UpdateManufacturerService => {
    const manufacturerRepository = new ManufacturerRepository()

    return new UpdateManufacturerService(manufacturerRepository)
}