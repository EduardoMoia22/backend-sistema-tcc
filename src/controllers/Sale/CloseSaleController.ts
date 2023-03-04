import { Request, Response } from "express";
import { makeCloseSale } from "../../Factories/Sale/CloseSaleFactory";
import { CloseSaleService } from "../../Services/Sale/CloseSaleService";

export class CloseSaleController{
    async handle(req: Request, res: Response){
        const id = req.query.sale as string

        return res.json(await makeCloseSale().execute(id))
    }
}