import { Request, Response } from "express";
import { makeListAllAccounts } from "../../Factories/AccountsReceivable/ListAllAccountsFactory";
import { ListAllAccountsService } from "../../Services/AccountsReceivable/ListAllAccountsService";

export class ListAllAccountsController{
    async handle(req: Request, res: Response){
        return res.json(await makeListAllAccounts().execute())
    }
}