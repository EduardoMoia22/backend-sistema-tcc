import { IProductRepository } from "../../Repositories/ProductRepository"

export class ListAllProductsService{
    private readonly productRepository: IProductRepository

    constructor(productRepository: IProductRepository){
        this.productRepository = productRepository
    }

    async execute(){
        return await this.productRepository.ListAll()
    }
}