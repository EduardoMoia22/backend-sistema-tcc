import { IAccountsReceivableRepository } from "../../Repositories/AccountsReceivableRepository";

export class ListAllAccountsService{
    private readonly accountsReceivableRepository: IAccountsReceivableRepository
    
    constructor(accountsReceivableRepository: IAccountsReceivableRepository){
        this.accountsReceivableRepository = accountsReceivableRepository
    }

    async execute(){
        const listAllAccounts = await this.accountsReceivableRepository.ListAll()

        return listAllAccounts
    }
}