import { Request, Response } from "express";
import { makeAddAccount } from "../../Factories/AccountsReceivable/AddAccountFactory";
import { AddAccountService } from "../../Services/AccountsReceivable/AddAccountService";

export class AddAccountController{
    async handle(req: Request, res: Response){
        const { saleID } = req.body

        return res.json(await makeAddAccount().execute(saleID))
    }
}