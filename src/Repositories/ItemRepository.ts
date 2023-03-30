import { Item } from "../Models/ItemModel";
import { ItemSchema } from "../Schemas/Schemas";
import { prisma } from "../Utils/prisma/prisma";
import { SaleRepository } from "./SaleRepository";

type ItemProps = {
    amount: number
    productID: number
    saleID: string
}

export interface IItemRepository{
    Add({amount, productID, saleID}: ItemProps): Promise<Item>
    ListAllFromSaleID(saleID: string): Promise<Item[]>
    Delete(id: string): Promise<void>
}

export class ItemRepository implements IItemRepository {
  async Add({ amount, productID, saleID }: ItemProps): Promise<Item> {
    const item = await prisma.item.create({
      data: {
        productID,
        saleID,
        amount,
      },
    });

    return item;
  }

  async ListAllFromSaleID(id: string): Promise<Item[]> {
    const items = await prisma.item.findMany({
      where: {
        saleID: id,
      },
      include: {
        product: true,
        sale: true,
      },
    });

    return items;
  }

  async Delete(id: string): Promise<void> {
    await prisma.item.delete({
      where: {
        id: id,
      },
    });
  }
}