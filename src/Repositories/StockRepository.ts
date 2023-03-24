import { Stock } from "../Models/StockModel";
import { prisma } from "../Utils/prisma/prisma";

type StockProps = {
    stockMin: number
    stock: number
}

export interface IStockRepository{
    Create({stockMin, stock}: StockProps): Promise<Stock>
    SetNew(id: number, amount: number): Promise<Stock>
    FindById(id: number): Promise<Stock>
    Delete(id: number): Promise<void>
    Deactive(id: number): Promise<void>
}

export class StockRepository implements IStockRepository{
    async Create({stockMin, stock}: StockProps): Promise<Stock>{
        const createStock = await prisma.stock.create({
            data: {
                stock,
                stockMin,
            }
        })

        return createStock
    }

    async SetNew(id: number, amount: number): Promise<Stock>{
        await this.FindById(id)

        const stock = await prisma.stock.update({
            where: {
                id : id
            },
            data: {
                stock: amount
            }
        })

        return stock

    }

    async FindById(id: number): Promise<Stock>{
        const stock = await prisma.stock.findFirst({
            where: {
                id: id
            }
        })

        if(!stock){
            throw new Error("O estoque não existe")
        }
        
        return stock
        
    }

    async Delete(id: number): Promise<void> {
        await prisma.stock.delete({
            where: {
                id: id
            }
        })
    }

    async Deactive(id: number): Promise<void>{
        await prisma.stock.update({
            data: {
                active: false
            },
            where: {
                id: id
            }
        })
    }

}