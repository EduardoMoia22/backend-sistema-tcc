import { Stock } from "./StockModel"

export type Product = {
    id: number
    name: string
    bar_code: string
    reference: string
    manufacturerID: number
    groupID: number
    price: number
    description: string
    stockID: number
}