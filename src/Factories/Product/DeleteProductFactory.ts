import { ProductRepository } from "../../Repositories/ProductRepository";
import { DeleteProductService } from "../../Services/Product/DeleteProductService";

export const makeDeleteProduct = (): DeleteProductService => {
    const productRepository = new ProductRepository()
    
    return new DeleteProductService(productRepository)
}