import { ManufacturerRepository } from "../../Repositories/ManufacturerRepository";
import { ListAllManufacturersService } from "../../Services/Manufacturer/ListAllManufacturersService";

export const makeListAllManufacturers = (): ListAllManufacturersService => {
    const manufacturerRepository = new ManufacturerRepository()

    return new ListAllManufacturersService(manufacturerRepository)
}