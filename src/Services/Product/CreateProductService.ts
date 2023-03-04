import { IProductRepository } from "../../Repositories/ProductRepository"
import { IStockRepository } from "../../Repositories/StockRepository";
import { ProductSchemaWithStockSchema } from "../../Schemas/Schemas";

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

  async execute({name, price, description, stock, stockMin}: ProductSchemaWithStockSchema){
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