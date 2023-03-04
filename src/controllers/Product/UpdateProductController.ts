import { Request, Response } from "express";
import { makeUpdateProduct } from "../../Factories/Product/UpdateProductFactory";
import { UpdateProductService } from "../../Services/Product/UpdateProductService";

export class UpdateProductController{
    async handle(req: Request, res: Response){
        let { id, name, price, description } = req.body

        id = parseInt(id)

        return res.json(await makeUpdateProduct().execute({id , name, description, price }))
    }
}