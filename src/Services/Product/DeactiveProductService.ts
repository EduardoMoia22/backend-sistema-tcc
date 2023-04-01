import { IProductRepository } from "../../Repositories/ProductRepository"
import { DeactiveStockService } from "../Stock/DeactiveStockService"

export class DeactiveProductService{
    private readonly productRepository: IProductRepository
    private readonly deactiveStockService: DeactiveStockService

    constructor(productRepository: IProductRepository, deactiveStockService: DeactiveStockService){
        this.productRepository = productRepository
        this.deactiveStockService = deactiveStockService
    }

    async execute(id: string){
        const product = await this.productRepository.FindById(parseInt(id))

        if(!product){
            throw new Error("Produto não cadastrado.")
        }
        await this.productRepository.Deactive(parseInt(id))
        await this.deactiveStockService.execute(product.stockID)
        return "Produto desativado com sucesso."
    }

}