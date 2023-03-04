import { AccountsReceivableRepository } from "../../Repositories/AccountsReceivableRepository";
import { AddAccountService } from "../../Services/AccountsReceivable/AddAccountService";

export const makeAddAccount = (): AddAccountService => {
    const accountsReceivableRepository = new AccountsReceivableRepository() 
    return new AddAccountService(accountsReceivableRepository)
}