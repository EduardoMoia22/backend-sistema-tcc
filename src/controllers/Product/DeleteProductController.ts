import { Request, Response } from "express";
import { makeDeleteProduct } from "../../Factories/Product/DeleteProductFactory";
import { DeleteProductService } from "../../Services/Product/DeleteProductService";


export class DeleteProductController{
    async handle(req: Request, res: Response){
        const { id } = req.params

        return res.json(await makeDeleteProduct().execute(id))
    }
}