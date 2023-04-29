import { PaymentMethod } from "../Models/PaymentMethodModel";
import { prisma } from "../Utils/prisma/prisma";

type PaymentMethodProps = {
  name: string
  accounts_receivable: boolean
}

export interface IPaymentMethodsRepository{
  AddNew({name, accounts_receivable}: PaymentMethodProps): Promise<PaymentMethod>
  FindById(id: number): Promise<PaymentMethod>
  ListAll(): Promise<PaymentMethod[]>
}

export class PaymentMethodsRepository implements IPaymentMethodsRepository{
  async AddNew({name, accounts_receivable}: PaymentMethodProps): Promise<PaymentMethod>{
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