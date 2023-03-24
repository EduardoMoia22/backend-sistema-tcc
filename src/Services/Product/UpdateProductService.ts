import { IProductRepository } from "../../Repositories/ProductRepository"

type UpdateProductProps = {
    id: number
    name: string
    price: number
    description: string
}

export class UpdateProductService{
    private readonly productRepository: IProductRepository

    constructor(productRepository: IProductRepository){
        this.productRepository = productRepository
    }

    async execute({ id, name, price, description }: UpdateProductProps){
        return await this.productRepository.Update({ id, name, description, price })
    }
}