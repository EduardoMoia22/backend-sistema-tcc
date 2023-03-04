import { PaymentMethodsRepository } from "../../Repositories/PaymentMethodsRepository";
import { FindPaymentByIdService } from "../../Services/PaymentMethods/FindPaymentByIdService";

export const makeFindPaymentById = (): FindPaymentByIdService => {
    const paymentMethodsRepository = new PaymentMethodsRepository()
    
    return new FindPaymentByIdService(paymentMethodsRepository)
}