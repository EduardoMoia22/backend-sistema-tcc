import { ISaleRepository } from "../../Repositories/SaleRepository";

export class ListAllByPaymentMethodService{
  private readonly saleRepository: ISaleRepository

  constructor(saleRepository: ISaleRepository){
    this.saleRepository = saleRepository
  }

  async execute(paymentID: number){
    const sales = await this.saleRepository.ListAllByPaymentMethod(paymentID)

    return sales
  }
}