import { IManufacturerRepository } from "../../Repositories/ManufacturerRepository";

export class CreateManufacturerService{
    private readonly manufacturerRepository: IManufacturerRepository

  constructor(manufacturerRepository: IManufacturerRepository) {
    this.manufacturerRepository = manufacturerRepository
  }    

  async execute(name: string){
    return await this.manufacturerRepository.Create(name)
  }
}