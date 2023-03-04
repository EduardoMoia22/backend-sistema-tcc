import { PaymentMethodsRepository } from "../../Repositories/PaymentMethodsRepository";
import { ListAllPaymentsMethodsService } from "../../Services/PaymentMethods/ListAllPaymentsMethodsService";

export const makeListAllPaymentsMethods = (): ListAllPaymentsMethodsService => {
    const paymentMethodsRepository = new PaymentMethodsRepository()
    
    return new ListAllPaymentsMethodsService(paymentMethodsRepository)
}