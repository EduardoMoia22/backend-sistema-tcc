import { Request, Response } from "express";
import { makeListItemsFromSaleById } from "../../Factories/Sale/ListItemsFromSaleById";
import { ListItemsFromSaleByIdService } from "../../Services/Sale/ListItemsFromSaleByIdService";

export class ListItemsFromSaleByIdController{
    async handle(req: Request, res: Response){
        const id = req.query.SaleID as string

       return res.json(await makeListItemsFromSaleById().execute(id))
    }
}