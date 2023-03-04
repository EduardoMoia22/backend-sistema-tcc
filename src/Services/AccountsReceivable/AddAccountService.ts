import { IAccountsReceivableRepository } from "../../Repositories/AccountsReceivableRepository";

export class AddAccountService{
    private readonly accountsReceivableRepository: IAccountsReceivableRepository 

    constructor(accountsReceivableRepository: IAccountsReceivableRepository){
        this.accountsReceivableRepository = accountsReceivableRepository
    }

    async execute(saleID: string){
        const account = await this.accountsReceivableRepository.Add(saleID)

        return account
    }
}