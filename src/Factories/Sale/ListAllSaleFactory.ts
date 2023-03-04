import { SaleRepository } from "../../Repositories/SaleRepository";
import { ListAllSalesService } from "../../Services/Sale/ListAllSalesService";

export const makeListAllSale = (): ListAllSalesService => {
    const saleRepository = new SaleRepository()
    
    return new ListAllSalesService(saleRepository)
}