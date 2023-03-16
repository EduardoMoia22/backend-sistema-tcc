import { ProductRepository } from "../../Repositories/ProductRepository";
import { StockRepository } from "../../Repositories/StockRepository";
import { DeleteProductService } from "../../Services/Product/DeleteProductService";
import { makeDeleteStock } from "../Stock/DeleteStockFactory";

export const makeDeleteProduct = (): DeleteProductService => {
    const productRepository = new ProductRepository()
    return new DeleteProductService(productRepository, makeDeleteStock())
}