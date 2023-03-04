import { PaymentMethodsRepository } from "../../Repositories/PaymentMethodsRepository";
import { AddNewPaymentMethodService } from "../../Services/PaymentMethods/AddNewPaymentMethodService";

export const makeAddNewPaymentMethod = (): AddNewPaymentMethodService => {
    const paymentMethodsRepository = new PaymentMethodsRepository()
    
    return new AddNewPaymentMethodService(paymentMethodsRepository)
}