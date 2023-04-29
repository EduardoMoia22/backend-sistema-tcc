import { IItemRepository } from "../../Repositories/ItemRepository";
import { ISaleRepository } from "../../Repositories/SaleRepository";

export class DeleteSaleService{
    private readonly saleRepository: ISaleRepository
    private readonly itemRepository: IItemRepository

    constructor(
        saleRepository: ISaleRepository,
        itemRepository: IItemRepository
    ){
        this.saleRepository = saleRepository
        this.itemRepository = itemRepository
    }

    async execute(id: string){
        await this.deleteItemsFromSale(id)

        const deleteSale = await this.saleRepository.Delete(id)

        return deleteSale
    }

    async deleteItemsFromSale(id: string){
        const sale = await this.saleRepository.FindById(id)

        if(!sale){
            throw new Error("A venda não existe")
        }

        if(!sale.open){
            throw new Error("A venda esta fechada")
        }

        const items = await this.itemRepository.ListAllFromSaleID(id)

        if (items.length === 0){
            throw new Error("A venda não possuí nenhum produto")
        }
        
        for(let i = 0; i < items.length; i++){
            await this.itemRepository.Delete(items[i].id)
        }
    }
}