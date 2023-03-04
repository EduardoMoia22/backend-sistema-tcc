import { Request, Response } from "express";
import { makeListAllProduct } from "../../Factories/Product/ListAllProductFactory";
import { ListAllProductsService } from "../../Services/Product/ListAllProductsService";

export class ListAllProductsController{
    async handle(req: Request, res: Response){
        return res.json(await makeListAllProduct().execute())
    }
}