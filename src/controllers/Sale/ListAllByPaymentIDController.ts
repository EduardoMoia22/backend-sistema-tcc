import { Request, Response } from "express";
import { makeListAllByPaymentMethod } from "../../Factories/Sale/ListAllByPaymentMethodFactory";
import { ListAllByPaymentMethodService } from "../../Services/Sale/ListAllByPaymentMethodService";

export class listAllByPaymentMethodController{
  async handle(req: Request, res: Response){
    const paymentID = req.query.paymentID as string

    res.json(await makeListAllByPaymentMethod().execute(parseInt(paymentID)))

  }
}