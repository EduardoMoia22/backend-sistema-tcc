import { Client } from "../Models/ClientModel"
import { prisma } from "../Utils/prisma/prisma"

type ClientProps = {
  name: string
  fantasy: string
  formatedCPF: string
  cnpj: string
  fundation: string
  birthday: string
}

export interface IClientRepository{
  Create({
    name, fantasy, formatedCPF, cnpj, fundation, birthday
  }: ClientProps): Promise<Client>
  FindById(id: number): Promise<Client>
  ListAll(): Promise<Client[]>
  Update({
    id, name, fantasy, cpf, cnpj, fundation, birthday
  }: Client): Promise<Client>
  Delete(id: number): Promise<void>
}

export class ClientRepository implements IClientRepository{
  async Create({
    name, fantasy, formatedCPF, cnpj, fundation, birthday
  }: ClientProps): Promise<Client>{
    const client = await prisma.client.create({
      data:{
        name, 
        fantasy, 
        cnpj, 
        cpf: formatedCPF,
        fundation,
        birthday
      }
    })

    return client
  }

  async FindById(id: number): Promise<Client>{
    const client = await prisma.client.findFirst({
      where: {
        id: id
      }
    })

    if(!client){
      throw new Error("Cliente não cadastrado")
    } else {
      return client
    }
  } 

  async ListAll(): Promise<Client[]>{
    return await prisma.client.findMany()
  }

  async Update({id, name, fantasy, cpf, cnpj, fundation, birthday}: Client): Promise<Client>{
    const client = this.FindById(id)

    if(!client){
      throw new Error("Cliente não cadastrado")
    } 

    const updateClient = await prisma.client.update({
      where:{
        id: id
      },
      data: {
        name,
        fantasy,
        cpf,
        cnpj,
        fundation,
        birthday
      }
    })

    return updateClient
  }

  async Delete(id: number): Promise<void>{
    await this.FindById(id)

    await prisma.client.delete({
      where: {
        id: id
      }
    })
  }
}