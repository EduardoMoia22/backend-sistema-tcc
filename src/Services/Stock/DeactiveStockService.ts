import { IStockRepository } from "../../Repositories/StockRepository";

export class DeactiveStockService{
    private readonly stockRepository: IStockRepository

    constructor(stockRepository: IStockRepository) {
        this.stockRepository = stockRepository
    }    
    
    async execute(id: number){
        const stockExists = await this.stockRepository.FindById(id)

        if(!stockExists){
            throw new Error("Estoque não vinculado em nenhum produto")
        }

        return await this.stockRepository.Deactive(id)
    }
}