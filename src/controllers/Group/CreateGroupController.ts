import { Request, Response } from "express";
import { makeCreateGroup } from "../../Factories/Group/CreateGroupFactory";
import { Group } from "../../Models/GroupModel";

export class CreateGroupController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    return res.json(await makeCreateGroup().execute(name));
  }
}
