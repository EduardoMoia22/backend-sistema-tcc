import { ISaleRepository } from "../../Repositories/SaleRepository";

export class ListAllSalesService{
    private readonly saleRepository: ISaleRepository

    constructor(saleRepository: ISaleRepository){
        this.saleRepository = saleRepository
    }

    async execute(){
        const sales = await this.saleRepository.ListAll()
    
        return sales
    }
}