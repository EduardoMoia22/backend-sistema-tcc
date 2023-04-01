import { IItemRepository } from "../../Repositories/ItemRepository";
import { IProductRepository } from "../../Repositories/ProductRepository";
import { IStockRepository } from "../../Repositories/StockRepository";

type AddItemToSaleProps = {
    amount: number
    productID: number
    saleID: string
}

export class AddItemToSaleService{
    private readonly itemRepository: IItemRepository
    private readonly stockRepository: IStockRepository
    private readonly productRepository: IProductRepository

    constructor(
        itemRepository: IItemRepository,
        stockRepository: IStockRepository,
        productRepository: IProductRepository){
        this.itemRepository = itemRepository
        this.stockRepository = stockRepository
        this.productRepository = productRepository
    }

    async execute({amount, productID, saleID}: AddItemToSaleProps){
        const {id, name, stockID} = await this.productRepository.FindById(productID)

        if(!id){
            throw new Error("Produto não cadastrado")
        }

        const stock = await this.stockRepository.FindById(stockID)

        if((stock.stock - amount) < stock.stockMin){
            throw new Error(`A quantidade que está sendo vendida ultrapassa o valor minímo do produto em estoque. ID: ${id} - NOME: ${name}`)
        }

        return await this.itemRepository.Add({
            amount,
            productID,
            saleID
        })
    }
}