import { Account } from "../Models/AccountModel";
import { prisma } from "../Utils/prisma/prisma";

export interface IAccountsReceivableRepository{
    Add(saleID: string): Promise<Account>
    ListAll(): Promise<Account[]>
    Close(id: string): Promise<void>
    FindById(id: string): Promise<Account>
}

export class AccountsReceivableRepository implements IAccountsReceivableRepository{
    async Add(saleID: string): Promise<Account>{
        const account = await prisma.accountsReceivable.create({
            data: {
                saleID: saleID
            }
        })

        return account
    }

    async ListAll(): Promise<Account[]>{
        const accounts = await prisma.accountsReceivable.findMany({
            include:{
                sale: true
            }
        })

        return accounts
    }

    async Close(id: string): Promise<void>{
        await prisma.accountsReceivable.delete({
            where: {
                id: id
            }
        })
    }

    async FindById(id: string): Promise<Account>{
        const account = await prisma.accountsReceivable.findFirst({
            where: {
                id: id
            }
        })

        return account
    }
}