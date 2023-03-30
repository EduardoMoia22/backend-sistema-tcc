import { Request, Response } from "express";
import { makeDeleteGroup } from "../../Factories/Group/DeleteGroupFactory";

export class DeleteGroupController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    return res.json(await makeDeleteGroup().execute(parseInt(id)));
  }
}
