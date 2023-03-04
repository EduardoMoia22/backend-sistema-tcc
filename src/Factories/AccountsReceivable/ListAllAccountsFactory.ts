import { AccountsReceivableRepository } from "../../Repositories/AccountsReceivableRepository";
import { ListAllAccountsService } from "../../Services/AccountsReceivable/ListAllAccountsService";

export const makeListAllAccounts = (): ListAllAccountsService => {
    const accountsReceivableRepository = new AccountsReceivableRepository()

    return new ListAllAccountsService(accountsReceivableRepository)
}