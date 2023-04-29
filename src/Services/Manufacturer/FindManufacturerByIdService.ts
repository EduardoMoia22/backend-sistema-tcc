import { IManufacturerRepository } from "../../Repositories/ManufacturerRepository";

export class FindManufacturerByIdService{
    private readonly manufacturerRepository: IManufacturerRepository

  constructor(manufacturerRepository: IManufacturerRepository) {
    this.manufacturerRepository = manufacturerRepository
  }    

  async execute(id: number){
    return await this.manufacturerRepository.FindById(id)
  }
}