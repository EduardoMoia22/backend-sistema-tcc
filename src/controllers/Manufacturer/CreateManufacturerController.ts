import { Request, Response } from "express";
import { makeCreateManufacturer } from "../../Factories/Manufacturer/CreateManufacturerFactory";

export class CreateManufacturerController
{
    public async Handle(req: Request, res: Response)
    {
        const name = req.body.name;

        return res.json(await makeCreateManufacturer().execute(name));
    }
}