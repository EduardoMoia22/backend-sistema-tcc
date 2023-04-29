import { Request, Response } from "express";
import { makeAddNewPaymentMethod } from "../../Factories/PaymentMethods/AddNewPaymentMethodFactory";

export class AddNewPaymentMethodController {
  async handle(req: Request, res: Response) {
    const { name, accounts_receivable } = await req.body;

    return res.json(
      await makeAddNewPaymentMethod().execute({ name, accounts_receivable })
    );
  }
}