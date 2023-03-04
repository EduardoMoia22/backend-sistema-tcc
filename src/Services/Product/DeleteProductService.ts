import { IProductRepository } from "../../Repositories/ProductRepository"

export class DeleteProductService{
    private readonly productRepository: IProductRepository

    constructor(productRepository: IProductRepository){
        this.productRepository = productRepository
    }

    async execute(id: string){
        const product = await this.productRepository.FindById(parseInt(id))

        if(!product){
            throw new Error("Produto não cadastrado.")
        }
        await this.productRepository.Delete(parseInt(id))

        return "Produto Deletado com sucesso."
    }

}