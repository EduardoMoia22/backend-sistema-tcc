import { IItemRepository } from "../../Repositories/ItemRepository";

export class ListItemsFromSaleByIdService{
    private readonly itemRepository: IItemRepository

    constructor(
        itemRepository: IItemRepository
    ){
        this.itemRepository = itemRepository
    }

    async execute(id: string){
        const items = await this.itemRepository.ListAllFromSaleID(id)

        return items
    }
}