import { IPaymentMethodsRepository } from "../../Repositories/PaymentMethodsRepository";

type AddNewPaymentMethodProps = {
  name: string
  accounts_receivable: boolean
}

export class AddNewPaymentMethodService{
  private readonly paymentMethodsRepository: IPaymentMethodsRepository

  constructor(paymentMethodsRepository: IPaymentMethodsRepository){
    this.paymentMethodsRepository = paymentMethodsRepository
  }

  async execute({name, accounts_receivable}: AddNewPaymentMethodProps){
    const paymentMethod = await this.paymentMethodsRepository.AddNew({name, accounts_receivable})

    return paymentMethod
  }
}