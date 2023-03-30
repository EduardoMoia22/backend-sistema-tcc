import { Group } from "../Models/GroupModel";
import { prisma } from "../Utils/prisma/prisma";

export interface IGroupRepository{
  Create(name: string): Promise<Group>
  ListAll(): Promise<Group[]>
  FindById(id: number): Promise<Group>
  Update({id, name}: Group): Promise<Group>
  Delete(id: number): Promise<void>
}

export class GroupRepository implements IGroupRepository{
  async Create(name: string): Promise<Group>{
    const group = await prisma.group.create({
      data: {
        name
      }
    })

    return group
  }

  async ListAll(): Promise<Group[]>{
    const groups = await prisma.group.findMany()
    
    return groups
  }

  async FindById(id: number): Promise<Group>{
    const group = await prisma.group.findFirst({
      where: {
        id: id
      }
    })

    return group
  }

  async Update({id, name}: Group): Promise<Group>{
    const group = await prisma.group.update({
      where: {
        id: id
      },
      data: {
        name
      }
    }) 

    return group
  }

  async Delete(id: number): Promise<void>{
    await prisma.group.delete({
      where: {
        id: id
      }
    })
  }
}