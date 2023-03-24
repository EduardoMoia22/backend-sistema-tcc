import { Sale } from "../Models/SaleModel";
import { prisma } from "../Utils/prisma/prisma";

type SaleProps = {
    paymentID: number
    open: boolean
    clientID?: number
}

export interface ISaleRepository{
    Create({paymentID, open, clientID}: SaleProps): Promise<Sale>
    FindById(id: string): Promise<Sale>
    ListAll(): Promise<Sale[]>
    ListAllByPaymentMethod(paymentID: number): Promise<Sale[]>
    Close(id: string): Promise<void>
    Delete(id: string): Promise<void>
}

export class SaleRepository implements ISaleRepository{
    async Create({paymentID, open, clientID}: SaleProps ): Promise<Sale>{
        const sale = await prisma.sale.create({
            data: {
                clientID,
                paymentID,
                open
            }
        })

        return sale
    }

    async FindById(id: string): Promise<Sale>{
        const sale = await prisma.sale.findFirst({
            where: {
                id: id
            }, 
            include:{
                client: true
            }
        })

        if(!sale){
            throw new Error("Venda não existente!")
        }

        return sale
    }
    
    async ListAll(): Promise<Sale[]>{
        const sales = await prisma.sale.findMany({
            include:{
                client: true
            }
        })

        return sales
    }

    async ListAllByPaymentMethod(paymentID: number): Promise<Sale[]>{
        const sales = await prisma.sale.findMany({
            where: {
                paymentID
            },
            include: {
                client: true
            }
        })
        
        if(sales.length === 0){
            throw new Error("Não existe vendas com essa forma de pagamento!")
        }

        return sales
    }

    async Close(id: string): Promise<void>{
        await prisma.sale.update({
            data: {
                open: false
            },
            where: {
                id: id
            }
        })
    }

    async Delete(id: string): Promise<void>{
        await prisma.sale.delete({
            where: {
                id: id
            }
        })
     }
}