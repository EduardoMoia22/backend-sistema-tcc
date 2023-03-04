import { PaymentMethodsRepository } from '../../Repositories/PaymentMethodsRepository'
import { SaleRepository } from '../../Repositories/SaleRepository'
import { FindPaymentByIdService } from '../../Services/PaymentMethods/FindPaymentByIdService'
import { CreateSaleService } from '../../Services/Sale/CreateSaleService'
import { makeFindClient } from '../Client/FindClientFactory'

export const makeCreateSale = (): CreateSaleService => {
    const saleRepository = new SaleRepository()
    const paymentMethodsRepository = new PaymentMethodsRepository()

    const findPaymentByIdService = new FindPaymentByIdService(paymentMethodsRepository)

    return new CreateSaleService(saleRepository, findPaymentByIdService, makeFindClient())
}