import { Request, Response } from "express";
import { makeListAllSale } from "../../Factories/Sale/ListAllSaleFactory";
import { ListAllSalesService } from "../../Services/Sale/ListAllSalesService";

export class ListAllSalesController{
    async handle(req: Request, res: Response){
        return res.json(await makeListAllSale().execute())
    }
}