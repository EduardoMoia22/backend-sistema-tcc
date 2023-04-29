import { ManufacturerRepository } from "../../Repositories/ManufacturerRepository";
import { FindManufacturerByIdService } from "../../Services/Manufacturer/FindManufacturerByIdService";

export const makeFindManufacturerById = (): FindManufacturerByIdService => {
    const manufacturerRepository = new ManufacturerRepository()

    return new FindManufacturerByIdService(manufacturerRepository)
}