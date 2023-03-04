import { IProductRepository } from "../../Repositories/ProductRepository"
import { ProductSchemaWithId } from "../../Schemas/Schemas";

export class UpdateProductService{
    private readonly productRepository: IProductRepository

    constructor(productRepository: IProductRepository){
        this.productRepository = productRepository
    }

    async execute({ id, name, price, description }: ProductSchemaWithId){
        return await this.productRepository.Update({ id, name, description, price })
    }
}