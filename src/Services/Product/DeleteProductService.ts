import { IProductRepository } from "../../Repositories/ProductRepository"
import { DeleteStockService } from "../Stock/DeleteStockService"

export class DeleteProductService{
    private readonly productRepository: IProductRepository
    private readonly deleteStockService: DeleteStockService

    constructor(productRepository: IProductRepository, deleteStockService: DeleteStockService){
        this.productRepository = productRepository
        this.deleteStockService = deleteStockService
    }

    async execute(id: string){
        const product = await this.productRepository.FindById(parseInt(id))

        if(!product){
            throw new Error("Produto não cadastrado.")
        }
        await this.productRepository.Deactive(parseInt(id))
        await this.deleteStockService.execute(product.stockID)
        return "Produto desativado com sucesso."
    }

}