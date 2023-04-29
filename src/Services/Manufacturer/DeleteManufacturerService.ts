import { IManufacturerRepository } from "../../Repositories/ManufacturerRepository";

export class DeleteManufacturerService{
    private readonly manufacturerRepository: IManufacturerRepository

  constructor(manufacturerRepository: IManufacturerRepository) {
    this.manufacturerRepository = manufacturerRepository
  }    

  async execute(id: number){
    return await this.manufacturerRepository.Delete(id)
  }
}