import { ItemRepository } from "../../Repositories/ItemRepository";
import { ListItemsFromSaleByIdService } from "../../Services/Sale/ListItemsFromSaleByIdService";

export const makeListItemsFromSaleById = (): ListItemsFromSaleByIdService => {
    const itemRepository = new ItemRepository()
    
    return new ListItemsFromSaleByIdService(itemRepository)
}