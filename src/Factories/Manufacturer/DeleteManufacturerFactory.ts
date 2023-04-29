import { ManufacturerRepository } from "../../Repositories/ManufacturerRepository";
import { DeleteManufacturerService } from "../../Services/Manufacturer/DeleteManufacturerService";

export const makeDeleteManufacturer = (): DeleteManufacturerService => {
    const manufacturerRepository = new ManufacturerRepository()

    return new DeleteManufacturerService(manufacturerRepository)
}