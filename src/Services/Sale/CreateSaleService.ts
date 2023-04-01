import { ISaleRepository } from "../../Repositories/SaleRepository";
import { FindClientService } from "../Client/FIndClienteService";
import { FindPaymentByIdService } from "../PaymentMethods/FindPaymentByIdService";

type CreateSaleProps = {
    paymentID: number
    open: boolean
    clientID?: number
}

export class CreateSaleService{
    private readonly saleRepository: ISaleRepository
    private readonly findPaymentByIdService: FindPaymentByIdService
    private readonly findClientById: FindClientService

    constructor(
        saleRepository: ISaleRepository,
        findPaymentByIdService: FindPaymentByIdService,
        findClientById: FindClientService
    ){
        this.saleRepository = saleRepository
        this.findPaymentByIdService = findPaymentByIdService,
        this.findClientById = findClientById
    }

    async execute({paymentID, open, clientID}: CreateSaleProps){
        const paymentExists = await this.findPaymentByIdService.execute(paymentID)        

        await this.findClientById.execute(clientID)

        if (!paymentExists){
            throw new Error("A forma de pagamento não existe.")
        }

        console.log('aa')
        const sale = await this.saleRepository.Create({paymentID, open, clientID})

        return sale
    }
}