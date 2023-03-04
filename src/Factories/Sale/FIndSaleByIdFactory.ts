import { SaleRepository } from "../../Repositories/SaleRepository";
import { FindSaleByIdService } from "../../Services/Sale/FIndSaleByIdService";

export const makeFindSaleById = (): FindSaleByIdService => {
    const saleRepository = new SaleRepository()

    return new FindSaleByIdService(saleRepository)
}