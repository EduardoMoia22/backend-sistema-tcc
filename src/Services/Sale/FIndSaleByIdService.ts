import { ISaleRepository } from "../../Repositories/SaleRepository";

export class FindSaleByIdService{
    private readonly saleRepository: ISaleRepository

    constructor(saleRepository: ISaleRepository){
        this.saleRepository = saleRepository
    }

    async execute(id: string){
        return await this.saleRepository.FindById(id)
    }
}