import { Request, Response } from "express";
import { makeFindGroupById } from "../../Factories/Group/FindGroupByIdFactory";

export class FindGroupByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    return res.json(await makeFindGroupById().execute(parseInt(id)));
  }
}
