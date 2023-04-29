import { StockRepository } from "../../Repositories/StockRepository";
import { DeactiveStockService } from "../../Services/Stock/DeactiveStockService";

export const makeDeactiveStock = (): DeactiveStockService => {
    return new DeactiveStockService(new StockRepository())
}