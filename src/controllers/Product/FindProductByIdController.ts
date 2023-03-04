import { Request, Response } from "express";
import { makeFindProductById } from "../../Factories/Product/FindProductByIdFactory";
import { FindProductByIdService } from "../../Services/Product/FIndProductByIdService";


export class FindProductByIdController {
    async handle(req: Request, res: Response){
        const { id } = req.params
    
        return res.json(await makeFindProductById().execute(id))
    }
}