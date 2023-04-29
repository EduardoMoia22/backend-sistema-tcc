import { Request, Response } from "express";
import { makeListAllManufacturers } from "../../Factories/Manufacturer/ListAllManufacturersFactory";

export class ListAllManufacturerController
{
    public async Handle(req: Request, res: Response)
    {
        return res.json(await makeListAllManufacturers().execute());
    }
}