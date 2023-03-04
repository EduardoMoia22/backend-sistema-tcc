import { ISaleRepository } from "../../Repositories/SaleRepository";
import { FindClientService } from "../Client/FIndClienteService";
import { FindPaymentByIdService } from "../PaymentMethods/FindPaymentByIdService";

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

    async execute(paymentID: number, open: boolean, clientID?: number){
        const paymentExists = await this.findPaymentByIdService.execute(paymentID)        

        await this.findClientById.execute(clientID.toString())

        if (!paymentExists){
            throw new Error("A forma de pagamento não existe.")
        }

        const sale = await this.saleRepository.Create(paymentID, open, clientID)

        return sale
    }
}