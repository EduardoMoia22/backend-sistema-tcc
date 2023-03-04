import { IPaymentMethodsRepository } from "../../Repositories/PaymentMethodsRepository";

export class ListAllPaymentsMethodsService{
    private readonly paymentMethodsRepository: IPaymentMethodsRepository

    constructor(paymentMethodsRepository: IPaymentMethodsRepository){
        this.paymentMethodsRepository = paymentMethodsRepository
    }
    
    async execute(){
        return await this.paymentMethodsRepository.ListAll()
    }
}