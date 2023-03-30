import { Product } from "../Models/ProductModel"
import { ProductSchema, ProductSchemaWithId } from "../Schemas/Schemas"
import { prisma } from "../Utils/prisma/prisma"

type ProductProps = {
  name: string
  bar_code: string
  reference: string
  manufacturerID: number
  groupID: number
  price: number
  description: string
  stockID: number
}

export interface IProductRepository{
  Create({name, bar_code, reference, manufacturerID, groupID, price, description, stockID}: ProductProps): Promise<Product>
  FindById(id: number): Promise<Product>
  ListAll(): Promise<Product[]>
  Update({id,name, bar_code, reference, manufacturerID, groupID, price, description, stockID}: Product): Promise<Product>
  Delete(id: number): Promise<void>
  Deactive(id: number): Promise<void>
}

export class ProductRepository implements IProductRepository{
  async Create({name, bar_code, reference, manufacturerID, groupID, price, description, stockID}: ProductProps): Promise<Product>{
    const product = await prisma.product.create({
      data:{
        name, 
        bar_code,
        reference,
        manufacturerID,
        groupID,
        price,
        description,
        stockID
      },
      include:{
        stock: true
      }
    })

    return product
  }

  async FindById(id: number): Promise<Product>{
    const findProduct = await prisma.product.findFirst({
      where: {
        id: id
      },
      include: {
        stock: true
      }
    })

    if(!findProduct){
      throw new Error("Produto não cadastrado.")
    }else{
      return findProduct
    }
  }

  async ListAll(): Promise<Product[]>{
    return await prisma.product.findMany({
      orderBy: {
        id: 'asc'
      },
      include: {
        stock: true
      },
      
    })
  }

  async Update({id, name, bar_code, reference, manufacturerID, groupID, price, description, stockID}: Product): Promise<Product>{
    const productExists = await this.FindById(id)

    if (!productExists){
      throw new Error("Produto não cadastrado!")
    }
    
    const updateProduct = await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        price: price,
        bar_code: bar_code,
        reference: reference,
        manufacturerID: manufacturerID,
        groupID: groupID,
        description: description,
      },
    });

    return updateProduct
  }

  async Delete(id: number): Promise<void>{
    await this.FindById(id)
    
    await prisma.product.delete({
      where: {
        id: id
      }
    })
  }

  async Deactive(id: number): Promise<void>{
    await prisma.product.update({
      data: {
        active: false
      },
      where: {
        id: id
      }
    })
  }
}