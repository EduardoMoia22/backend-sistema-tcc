import { Request, Response } from "express";
import { makeCreateSale } from "../../Factories/Sale/CreateSaleFactory";
import { CreateSaleService } from "../../Services/Sale/CreateSaleService";

export class CreateSaleController{
    async handle(req: Request, res: Response){
        const { clientID, paymentID, open } = await req.body

        return res.json(await makeCreateSale().execute(parseInt(paymentID), open, parseInt(clientID)))
    }
}