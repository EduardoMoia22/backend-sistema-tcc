import { Request, Response } from "express";
import { makeDeleteManufacturer } from "../../Factories/Manufacturer/DeleteManufacturerFactory";

export class DeleteManufacturerController
{
    public async Handle(req: Request, res: Response)
    {
        const id : string = req.params.id;
        
        return res.json(await makeDeleteManufacturer().execute(parseInt(id)));
    }
}