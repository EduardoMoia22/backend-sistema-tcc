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
    const stock = await this.stockRepository.FindById(id)
    
    if(!stock){
      throw new Error("Estoque não vinculado a nenhum produto")
    }

    if (stockMin == null){
      const { stockMin } = stock
    }

    const changeStock = await this.stockRepository.SetNew(id, newStock)

    return changeStock
  }
}