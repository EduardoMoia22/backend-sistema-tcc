import { StockRepository } from "../../Repositories/StockRepository"

export class SetNewStockService{
  private readonly stockRepository: StockRepository 

  constructor(
    stockRepository: StockRepository,
  ){
    this.stockRepository = stockRepository
  }
  
  async execute(id: number, newStock: number, stockMin: number){
    if (stockMin == null){
      const { stockMin } = await this.stockRepository.FindById(id)
    }

    const changeStock = await this.stockRepository.SetNew(id, newStock)

    return changeStock
  }
}