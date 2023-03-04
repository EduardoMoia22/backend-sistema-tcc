import { Item } from "../Models/ItemModel";
import { ItemSchema } from "../Schemas/Schemas";
import { prisma } from "../Utils/prisma/prisma";
import { SaleRepository } from "./SaleRepository";

export interface IItemRepository{
    Add({amount, productID, saleID}: ItemSchema): Promise<Item>
    ListAllFromSaleID(saleID: string): Promise<Item[]>
    Delete(id: string): Promise<void>
}

export class ItemRepository implements IItemRepository{
    async Add({ amount, productID, saleID }: ItemSchema): Promise<Item>{
        const item = await prisma.item.create({
            data:{
                productID,
                saleID,
                amount
            }
        })

        return item
    }

    async ListAllFromSaleID(id: string): Promise<Item[]>{
        const saleRepository = new SaleRepository()

        await saleRepository.FindById(id)

        const items = await prisma.item.findMany({
            where:{
                saleID: id
            },
            include:{
                product: true,
                sale: true
            }
        })

        return items
    }

    async Delete(id: string): Promise<void>{
        await prisma.item.delete({
            where: {
                id: id
            }
        })
    }
}