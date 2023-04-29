import { Manufacturer } from "../Models/ManufacturerModel";
import { prisma } from "../Utils/prisma/prisma";

export interface IManufacturerRepository{
    Create(name: string): Promise<Manufacturer>
    FindById(id: number): Promise<Manufacturer>
    ListAll(): Promise<Manufacturer[]>
    Delete(id: number): Promise<void>
    Update({id, name}: Manufacturer): Promise<Manufacturer>
}

export class ManufacturerRepository implements IManufacturerRepository{
    async Create(name: string): Promise<Manufacturer> {
        const manufacturer = await prisma.manufacturer.create({
            data: {
                name
            }
        })

        return manufacturer
    }
    async FindById(id: number): Promise<Manufacturer> {
        const manufacturer = await prisma.manufacturer.findFirst({
            where: {
                id: id
            }
        })

        return manufacturer
    }
    async ListAll(): Promise<Manufacturer[]> {
        const manufacturers = await prisma.manufacturer.findMany()
        return manufacturers
    }
    async Delete(id: number): Promise<void> {
        await prisma.manufacturer.delete({
            where: {
                id: id
            }
        })
    }
    async Update({ id, name }: Manufacturer): Promise<Manufacturer> {
        const manufacturer = await prisma.manufacturer.update({
            where:{
                id: id
            }, 
            data: {
                name: name
            }
        })

        return manufacturer
    }

}