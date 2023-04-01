import { ISaleRepository } from "../../Repositories/SaleRepository";

export class FindSaleByIdService{
    private readonly saleRepository: ISaleRepository

    constructor(saleRepository: ISaleRepository){
        this.saleRepository = saleRepository
    }

    async execute(id: string){
        const sale = await this.saleRepository.FindById(id)
        
        if(!sale){
            throw new Error("Venda não existe")
        }

        return sale
    }
}