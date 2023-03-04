import { IProductRepository } from "../../Repositories/ProductRepository"

export class FindProductByIdService{
    private readonly productRepository: IProductRepository

    constructor(productRepository: IProductRepository){
        this.productRepository = productRepository
    }

    async execute(id: string){
        const findProduct = await this.productRepository.FindById(parseInt(id))

        return findProduct
    }
}