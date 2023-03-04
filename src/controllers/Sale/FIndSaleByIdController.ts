import { Request, Response } from "express";
import { makeFindSaleById } from "../../Factories/Sale/FIndSaleByIdFactory";
import { FindSaleByIdService } from "../../Services/Sale/FIndSaleByIdService";

export class FindSaleByIdController{
    async handle(req: Request, res: Response){
        const id = req.query.saleID as string

        return res.send(await makeFindSaleById().execute(id))
    }
}