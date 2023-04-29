import { Item } from "../../Models/ItemModel";
import { IItemRepository } from "../../Repositories/ItemRepository";
import { IProductRepository } from "../../Repositories/ProductRepository";
import { IStockRepository } from "../../Repositories/StockRepository";

type AddItemToSaleProps = {
  amount: number;
  productID: number;
  saleID: string;
};

export class AddItemToSaleService {
  private readonly itemRepository: IItemRepository;
  private readonly stockRepository: IStockRepository;
  private readonly productRepository: IProductRepository;

  constructor(
    itemRepository: IItemRepository,
    stockRepository: IStockRepository,
    productRepository: IProductRepository
  ) {
    this.itemRepository = itemRepository;
    this.stockRepository = stockRepository;
    this.productRepository = productRepository;
  }

  async execute({ amount, productID, saleID }: AddItemToSaleProps) {
    const { id, name, stockID } = await this.productRepository.FindById(
      productID
    );

    const stock = await this.stockRepository.FindById(stockID);

    const saleItems = await this.itemRepository.ListAllFromSaleID(saleID);

    if (saleItems) {
      await this.ChecksThatTheQuantityOfTheProductOnSaleDoesNotExceedTheMinimumStock(
        saleItems,
        id,
        amount,
        stock.stock,
        stock.stockMin
      );
    }

    if (stock.stock - amount < stock.stockMin) {
      throw new Error(
        `A quantidade que está sendo vendida ultrapassa o valor minímo do produto em estoque. ID: ${id} - NOME: ${name}`
      );
    }
    const addItemOnSale = await this.itemRepository.Add({
      amount,
      productID,
      saleID,
    });

    return addItemOnSale;
  }

  private async SumQuantityOfSalesProduct(
    saleItems: Item[],
    productID: number
  ) {
    let sum = 0;
    for (let i = 0; i < saleItems.length; i++) {
      if (saleItems[i].productID === productID) {
        sum += saleItems[i].amount;
      }
    }
    return sum;
  }

  private async ChecksThatTheQuantityOfTheProductOnSaleDoesNotExceedTheMinimumStock(
    saleItems: Item[],
    id: number,
    amount: number,
    stock: number,
    stockMin: number
  ) {
    let sum = await this.SumQuantityOfSalesProduct(saleItems, id);
    if (sum + amount != amount) {
      const newAmount = amount + sum;
      if (stock - newAmount < stockMin) {
        throw new Error(
          `Não foi possível adicionar esse produto, pois a quantidade total adicionada ultrapassa o valor minimo de estoque`
        );
      }
    }
  }
}
