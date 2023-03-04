import { ItemRepository } from "../../Repositories/ItemRepository";
import { SaleRepository } from "../../Repositories/SaleRepository";
import { DeleteSaleService } from "../../Services/Sale/DeleteSaleService";

export const makeDeleteSale = (): DeleteSaleService => {
    const saleRepository = new SaleRepository()
    const itemRepository = new ItemRepository()

    return new DeleteSaleService(saleRepository, itemRepository)
}