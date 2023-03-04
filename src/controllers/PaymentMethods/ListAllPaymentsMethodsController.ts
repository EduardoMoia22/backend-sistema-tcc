import { Request, Response } from "express";
import { makeListAllPaymentsMethods } from "../../Factories/PaymentMethods/ListAllPaymentsMethodsFactory";

export class ListAllPaymentsMethodsController{
    async handle(req: Request, res: Response){
        return res.json(await makeListAllPaymentsMethods().execute())
    }
}