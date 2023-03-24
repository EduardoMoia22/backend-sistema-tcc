import { Request, Response } from "express";
import { makeCreateProduct } from "../../Factories/Product/CreateProductFactory";
import { CreateProductService } from "../../Services/Product/CreateProductService";


export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, bar_code, reference, manufacturerID, groupID, price, description, stock, stockMin } = req.body
    return res.json(await makeCreateProduct().execute({
      name,
      bar_code,
      reference,
      manufacturerID,
      groupID,
      price,
      description,
      stock,
      stockMin,
    }))
  }
}