import { Request, Response } from "express";
import { makeDeactiveProduct } from "../../Factories/Product/DeactiveProductFactory";

export class DeleteProductController{
    async handle(req: Request, res: Response){
        const { id } = req.params

        return res.json(await makeDeactiveProduct().execute(id))
    }
}