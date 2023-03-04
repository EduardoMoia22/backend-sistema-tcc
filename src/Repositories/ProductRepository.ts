import { Product } from "../Models/ProductModel"
import { ProductSchema, ProductSchemaWithId } from "../Schemas/Schemas"
import { prisma } from "../Utils/prisma/prisma"

export interface IProductRepository{
  Create({name, price, description, stockID}: ProductSchema): Promise<Product>
  FindById(id: number): Promise<Product>
  ListAll(): Promise<Product[]>
  Update({id, name, price, description}: ProductSchemaWithId): Promise<Product>
  Delete(id: number): Promise<void>
}

export class ProductRepository implements IProductRepository{
  async Create({name, price, description, stockID}: ProductSchema): Promise<Product>{
    const product = await prisma.product.create({
      data:{
        name, 
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

  async Update({id, name, price, description}: ProductSchemaWithId): Promise<Product>{
    const productExists = await this.FindById(id)

    if (!productExists){
      throw new Error("Produto não cadastrado!")
    }
    
    const updateProduct = await prisma.product.update({
      where: {
        id: id
      },
      data: {
        name: name,
        price: price,
        description: description
      }
    })

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
}