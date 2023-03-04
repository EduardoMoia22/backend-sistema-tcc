import { ProductRepository } from "../../Repositories/ProductRepository";
import { StockRepository } from "../../Repositories/StockRepository";
import { CreateProductService } from "../../Services/Product/CreateProductService";

export const makeCreateProduct = (): CreateProductService => {
    const productRepository = new ProductRepository()
    const stockRepository = new StockRepository()

    return new CreateProductService(productRepository, stockRepository)
}