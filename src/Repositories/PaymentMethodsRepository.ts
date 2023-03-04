import { PaymentMethod } from "../Models/PaymentMethodModel";
import { prisma } from "../Utils/prisma/prisma";

export interface IPaymentMethodsRepository{
  AddNew(name: string, accounts_receivable: boolean): Promise<PaymentMethod>
  FindById(id: number): Promise<PaymentMethod>
  ListAll(): Promise<PaymentMethod[]>
}

export class PaymentMethodsRepository implements IPaymentMethodsRepository{
  async AddNew(name: string, accounts_receivable: boolean): Promise<PaymentMethod>{
    const paymentMethod = await prisma.paymentMethods.create({
      data: {
        name: name,
        accounts_receivable
      }
    })

    return paymentMethod
  }

  async FindById(id: number): Promise<PaymentMethod>{
    const paymentMethod = await prisma.paymentMethods.findFirst({
      where: {
        id: id
      }
    })

    return paymentMethod
  }

  async ListAll(): Promise<PaymentMethod[]> {
    return await prisma.paymentMethods.findMany()
  }

}