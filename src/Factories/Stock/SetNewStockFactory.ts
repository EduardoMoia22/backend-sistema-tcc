import { StockRepository } from "../../Repositories/StockRepository";
import { SetNewStockService } from "../../Services/Stock/SetNewStockService";
import { makeDeleteSale } from "../Sale/DeleteSaleFactory";

export const makeSetNewStock = (): SetNewStockService => {
    const stockRepository = new StockRepository()

    return new SetNewStockService(stockRepository, makeDeleteSale())
}