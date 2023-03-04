import { Request, Response } from "express";
import { makeCreateProduct } from "../../Factories/Product/CreateProductFactory";
import { CreateProductService } from "../../Services/Product/CreateProductService";


export class CreateProductController{
  async handle(req: Request, res: Response){
    const {name, price, description, stock, stockMin} = req.body
    return res.json(await makeCreateProduct().execute({
      name,
      price,
      description,
      stock,
      stockMin
    }))
  }
}