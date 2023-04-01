import { IProductRepository } from "../../Repositories/ProductRepository"

type UpdateProductProps = {
    id: number
    name: string
    bar_code: string
    reference: string
    manufacturerID: number
    groupID: number
    price: number
    description: string
    stockID: number
}

export class UpdateProductService{
    private readonly productRepository: IProductRepository

    constructor(productRepository: IProductRepository){
        this.productRepository = productRepository
    }

    async execute({ id, name, bar_code, reference, manufacturerID, groupID, price, description, stockID}: UpdateProductProps){
        const product = await this.productRepository.FindById(id)

        if(!product){
            throw new Error("Produto não cadastrado")
        }
        
        return await this.productRepository.Update({ id, name, bar_code, reference, manufacturerID, groupID, price, description, stockID })
    }
}