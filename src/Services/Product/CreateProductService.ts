import { IProductRepository } from "../../Repositories/ProductRepository"
import { IStockRepository } from "../../Repositories/StockRepository";

type CreateProductProps = {
  name: string
  price: number
  description: string
  stock: number
  stockMin: number
}

export class CreateProductService{
  private readonly productRepository: IProductRepository
  private readonly stockRepository: IStockRepository

  constructor(
    productRepository: IProductRepository,
    stockRepository: IStockRepository
  ){
    this.productRepository = productRepository
    this.stockRepository = stockRepository
  }

  async execute({name, price, description, stock, stockMin}: CreateProductProps){
    const createStock = await this.stockRepository.Create({  
      stock,
      stockMin,
    })

    const product = await this.productRepository.Create({
      name, 
      price,
      description,
      stockID: createStock.id
    })

    return product
  }
}