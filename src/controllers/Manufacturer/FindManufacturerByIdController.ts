import { Request, Response } from "express";
import { makeFindManufacturerById } from "../../Factories/Manufacturer/FindManufacturerByIdFactory";

export class FindManufacturerByIdController
{
    public async Handle(req: Request, res: Response)
    {
        const { id } = req.params;

        return res.json(await makeFindManufacturerById().execute(parseInt(id)));
    }
}