import { IPaymentMethodsRepository } from "../../Repositories/PaymentMethodsRepository";

export class AddNewPaymentMethodService{
  private readonly paymentMethodsRepository: IPaymentMethodsRepository

  constructor(paymentMethodsRepository: IPaymentMethodsRepository){
    this.paymentMethodsRepository = paymentMethodsRepository
  }

  async execute(name: string, accounts_receivable: boolean){
    const paymentMethod = await this.paymentMethodsRepository.AddNew(name, accounts_receivable)

    return paymentMethod
  }
}