import { Request, Response } from "express";
import { makeListAllGroups } from "../../Factories/Group/ListAllGroupsFactory";

export class ListAllGroupsController {
  async handle(req: Request, res: Response) {
    return res.json(await makeListAllGroups().execute());
  }
}
