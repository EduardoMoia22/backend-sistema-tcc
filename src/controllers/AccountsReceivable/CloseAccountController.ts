import { Request, Response } from "express";
import { makeCloseAccount } from "../../Factories/AccountsReceivable/CloseAccountFactory";
import { CloseAccountService } from "../../Services/AccountsReceivable/CloseAccountService";

export class CloseAccountController{
    async handle(req: Request, res: Response){
        const account = req.query.account as string

        return res.json(await makeCloseAccount().execute(account))
    }
}