import { ProductRepository } from "../../Repositories/ProductRepository";
import { DeactiveProductService } from "../../Services/Product/DeactiveProductService";
import { makeDeactiveStock } from "../Stock/DeleteStockFactory";

export const makeDeactiveProduct = (): DeactiveProductService => {
    const productRepository = new ProductRepository()
    return new DeactiveProductService(productRepository, makeDeactiveStock())
}