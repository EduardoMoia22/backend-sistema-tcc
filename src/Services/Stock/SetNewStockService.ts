import { StockRepository } from "../../Repositories/StockRepository"

type SetNewStockProps = {
  id: number
  newStock: number
  stockMin: number
}

export class SetNewStockService{
  private readonly stockRepository: StockRepository 

  constructor(
    stockRepository: StockRepository,
  ){
    this.stockRepository = stockRepository
  }
  
  async execute({id, newStock, stockMin}: SetNewStockProps){
    if (stockMin == null){
      const { stockMin } = await this.stockRepository.FindById(id)
    }

    const changeStock = await this.stockRepository.SetNew(id, newStock)

    return changeStock
  }
}