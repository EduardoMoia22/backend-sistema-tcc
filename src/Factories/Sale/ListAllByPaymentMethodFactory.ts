import { SaleRepository } from "../../Repositories/SaleRepository";
import { ListAllByPaymentMethodService } from "../../Services/Sale/ListAllByPaymentMethodService";

export const makeListAllByPaymentMethod = (): ListAllByPaymentMethodService => {
    const saleRepository = new SaleRepository()
    
    return new ListAllByPaymentMethodService(saleRepository)
}