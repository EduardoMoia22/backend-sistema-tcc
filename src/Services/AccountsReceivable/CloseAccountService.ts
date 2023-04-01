import { IAccountsReceivableRepository } from "../../Repositories/AccountsReceivableRepository";
import { ISaleRepository } from "../../Repositories/SaleRepository";
import { CheckIfSaleIsOpen } from "../../Utils/Validations";

export class CloseAccountService{
    private readonly accountsReceivableRepository: IAccountsReceivableRepository
    private readonly saleRepository: ISaleRepository

    constructor(
        accountsReceivableRepository: IAccountsReceivableRepository,
        saleRepository: ISaleRepository 
    ){
        this.accountsReceivableRepository = accountsReceivableRepository
        this.saleRepository = saleRepository
    }

    async execute(id: string){

        const account = await this.accountsReceivableRepository.FindById(id)

        if(!account){
            throw new Error("Conta não existe")
        }

        const { open } = await this.saleRepository.FindById(account.saleID)

        await CheckIfSaleIsOpen(open)

        await this.saleRepository.Close(account.saleID)

        return await this.accountsReceivableRepository.Close(id)
    }
}