import { IPaymentMethodsRepository } from "../../Repositories/PaymentMethodsRepository";

export class FindPaymentByIdService{
    private readonly paymentMethodsRepository: IPaymentMethodsRepository
    
    constructor(paymentMethodsRepository: IPaymentMethodsRepository){
        this.paymentMethodsRepository = paymentMethodsRepository
    }

    async execute(id: number){
        const payment = await this.paymentMethodsRepository.FindById(id)

        if(!payment){
            throw new Error("Forma de pagamento não existe")
        }

        return payment
    }
}