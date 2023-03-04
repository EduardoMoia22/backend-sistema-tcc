import { AccountsReceivableRepository } from "../../Repositories/AccountsReceivableRepository"
import { SaleRepository } from "../../Repositories/SaleRepository"
import { CloseAccountService } from "../../Services/AccountsReceivable/CloseAccountService"

export const makeCloseAccount = (): CloseAccountService => {
    const accountsReceivableRepository = new AccountsReceivableRepository()
    const saleRepository = new SaleRepository()
    return new CloseAccountService(accountsReceivableRepository, saleRepository)
}