import { Request, Response } from "express";
import { makeUpdateGroup } from "../../Factories/Group/UpdateGroupFactory";

export class UpdateGroupController {
  async handle(req: Request, res: Response) {
    let { id, name } = req.body;
    id = parseInt(id);

    return res.json(await makeUpdateGroup().execute({ id, name }));
  }
}
