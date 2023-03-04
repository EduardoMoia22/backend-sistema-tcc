import { ProductRepository } from "../../Repositories/ProductRepository";
import { UpdateProductService } from "../../Services/Product/UpdateProductService";

export const makeUpdateProduct = (): UpdateProductService => {
    const productRepository = new ProductRepository
    
    return new UpdateProductService(productRepository)
}