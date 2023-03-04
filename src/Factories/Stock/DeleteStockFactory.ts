import { StockRepository } from "../../Repositories/StockRepository";
import { DeleteStockService } from "../../Services/Stock/DeleteStockService";

export const makeDeleteStock = (): DeleteStockService => {
    return new DeleteStockService(new StockRepository())
}