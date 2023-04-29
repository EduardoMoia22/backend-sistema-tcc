import { Request, Response } from "express";
import { makeUpdateManufacturer } from "../../Factories/Manufacturer/UpdateManufacturerFactory";

export class UpdateManufacturerController
{
    public async Handle(req: Request, res: Response)
    {
        const { id, name } = req.body;

        return res.json(await makeUpdateManufacturer().execute({id, name}));
    }
}