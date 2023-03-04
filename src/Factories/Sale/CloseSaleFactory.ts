import { AccountsReceivableRepository } from "../../Repositories/AccountsReceivableRepository";
import { ItemRepository } from "../../Repositories/ItemRepository";
import { ProductRepository } from "../../Repositories/ProductRepository";
import { SaleRepository } from "../../Repositories/SaleRepository";
import { StockRepository } from "../../Repositories/StockRepository";
import { CloseSaleService } from "../../Services/Sale/CloseSaleService";

export const makeCloseSale = (): CloseSaleService => {
    const saleRepository = new SaleRepository()
    const itemRepository = new ItemRepository()
    const productRepository = new ProductRepository()
    const accountsReceivableRepository = new AccountsReceivableRepository()
    const stockRepository = new StockRepository()

    return new CloseSaleService(
                saleRepository,
                accountsReceivableRepository,
                productRepository,
                stockRepository,
                itemRepository,
            )
}