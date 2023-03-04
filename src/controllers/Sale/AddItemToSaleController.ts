import { Request, Response } from "express";
import { makeAddItemToSale } from "../../Factories/Sale/AddItemToSaleFactory";
import { AddItemToSaleService } from "../../Services/Sale/AddItemToSaleService";

export class AddItemToSaleController{
    async handle(req: Request, res: Response){
        const { amount, productID, saleID } = await req.body

        res.json(await makeAddItemToSale().execute({
            amount,
            productID,
            saleID
        }))
    }
}