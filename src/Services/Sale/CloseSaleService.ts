import { IAccountsReceivableRepository } from "../../Repositories/AccountsReceivableRepository";
import { IItemRepository } from "../../Repositories/ItemRepository";
import { IProductRepository } from "../../Repositories/ProductRepository";
import { ISaleRepository } from "../../Repositories/SaleRepository";
import { IStockRepository } from "../../Repositories/StockRepository";
import { CheckIfSaleIsOpen } from "../../Utils/Validations";
import { SetNewStockService } from "../Stock/SetNewStockService";


export class CloseSaleService{
    private readonly saleRepository: ISaleRepository
    private readonly accountsReceivableRepository: IAccountsReceivableRepository
    private readonly productRepository: IProductRepository
    private readonly stockRepository: IStockRepository
    private readonly itemRepository: IItemRepository
    
    constructor(
        saleRepository: ISaleRepository,
        accountsReceivableRepository: IAccountsReceivableRepository,
        productRepository: IProductRepository,
        stockRepository: IStockRepository,
        itemRepository: IItemRepository,
    ){
        this.saleRepository = saleRepository
        this.accountsReceivableRepository = accountsReceivableRepository
        this.productRepository = productRepository
        this.stockRepository = stockRepository
        this.itemRepository = itemRepository
    }

    async execute(id: string){
        const { open } = await this.saleRepository.FindById(id)

        await CheckIfSaleIsOpen(open)

        // const entersInAccountsReceivable = await this.CheckIfItEntersTheAccountsReceivable({id, paymentID }) 
        
        await this.CalculateNewStock(id)

        await this.accountsReceivableRepository.Add(id)

        return await this.CloseSale(id)
    }

    async CloseSale(id: string){
        await this.saleRepository.Close(id)
    }

    // async CheckIfItEntersTheAccountsReceivable({ id, paymentID }: CheckIfItEntersTheAccountsReceivableProps){

    //     const payment = await this.paymentMethodsRepository.FindById(paymentID)
        
    //     if (payment.accounts_receivable){
    //         await this.accountsReceivableRepository.Add(id)

    //         return true
    //     }
    // }

    async CalculateNewStock (id: string){
        const setNewStockService = new SetNewStockService(this.stockRepository)

        const items = await this.itemRepository.ListAllFromSaleID(id)
        
        for(let i = 0; i < items.length; i++){
            const { productID, amount } = items[i]
            let product = await this.productRepository.FindById(productID)
            let id = product.id
            let { stock, stockMin } = await this.stockRepository.FindById(product.stockID)
            let newStock = stock - amount
            await setNewStockService.execute({id, newStock, stockMin})
        }
    }
}