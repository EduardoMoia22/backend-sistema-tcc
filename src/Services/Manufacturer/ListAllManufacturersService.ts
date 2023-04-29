import { IManufacturerRepository } from "../../Repositories/ManufacturerRepository";

export class ListAllManufacturersService{
    private readonly manufacturerRepository: IManufacturerRepository

  constructor(manufacturerRepository: IManufacturerRepository) {
    this.manufacturerRepository = manufacturerRepository
  }    

  async execute(){
    return await this.manufacturerRepository.ListAll()
  }
}