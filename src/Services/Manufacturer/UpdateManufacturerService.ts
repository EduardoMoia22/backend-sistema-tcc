import { IManufacturerRepository } from "../../Repositories/ManufacturerRepository";

type UpdateManufacturerProps = {
    id: number
    name: string
}

export class UpdateManufacturerService{
    private readonly manufacturerRepository: IManufacturerRepository

  constructor(manufacturerRepository: IManufacturerRepository) {
    this.manufacturerRepository = manufacturerRepository
  }    

  async execute({id, name}: UpdateManufacturerProps){
    return await this.manufacturerRepository.Update({id, name})
  }
}