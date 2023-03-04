import { ItemRepository } from "../../Repositories/ItemRepository";
import { ProductRepository } from "../../Repositories/ProductRepository";
import { StockRepository } from "../../Repositories/StockRepository";
import { AddItemToSaleService } from "../../Services/Sale/AddItemToSaleService";

export const makeAddItemToSale = (): AddItemToSaleService =>{
    const itemRepository = new ItemRepository()
    const stockRepository = new StockRepository()
    const productRepository = new ProductRepository()
    
    return new AddItemToSaleService(itemRepository, stockRepository, productRepository)
}