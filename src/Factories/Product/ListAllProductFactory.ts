import { ProductRepository } from "../../Repositories/ProductRepository";
import { ListAllProductsService } from "../../Services/Product/ListAllProductsService";

export const makeListAllProduct = (): ListAllProductsService => {
    const productRepository = new ProductRepository()
    
    return new ListAllProductsService(productRepository)
}