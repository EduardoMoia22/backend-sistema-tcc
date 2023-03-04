import { ProductRepository } from "../../Repositories/ProductRepository";
import { FindProductByIdService } from "../../Services/Product/FIndProductByIdService";

export const makeFindProductById = (): FindProductByIdService => {
    const productRepository = new ProductRepository()
    
    return new FindProductByIdService(productRepository)
}