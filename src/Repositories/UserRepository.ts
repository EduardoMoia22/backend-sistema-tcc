import { User } from "../Models/UserModel";
import { UserResponseSchema, UserSchema, UserSchemaWithHashPassword, UserSchemaWithId } from "../Schemas/Schemas";
import { prisma } from "../Utils/prisma/prisma";

export interface IUserRepository{
    Create({ name, email, hashPassword }: UserSchemaWithHashPassword): Promise<UserResponseSchema>
    FindByEmail(email: string): Promise<UserSchemaWithId>
    FindById(id: string): Promise<UserResponseSchema>
    ListAll(): Promise<UserResponseSchema[]>
    Delete(id: string): Promise<void>
    Update({ id, name, email, password }: UserSchemaWithId): Promise<UserResponseSchema>
}

export class UserRepository implements IUserRepository{
    async Create({ name, email, hashPassword }: UserSchemaWithHashPassword): Promise<UserResponseSchema>{
        const userExists = await this.FindByEmail(email)

        if(userExists){
            throw new Error("Usuário já cadastrado")
        }

        const user = await prisma.user.create({
            data:{
                name, 
                email, 
                password: hashPassword
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }

    async FindByEmail(email: string): Promise<UserSchemaWithId>{
        const user = await prisma.user.findFirst({
            where: {
                email: email
            },
        })

        return user
    }

    async FindById(id: string): Promise<UserResponseSchema>{
        const user = await prisma.user.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        if(!user){
            throw new Error("Usuário não cadastrado")
        }

        return user
    }

    async ListAll(): Promise<UserResponseSchema[]>{
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return users
    }

    async Delete(id: string): Promise<void>{
        await this.FindById(id)

        await prisma.user.delete({
            where: {
                id: id
            }, 
            select : {
                id: true,
                name: true,
                email: true
            }
        })
    }

    async Update({ id, name, email, password }: UserSchemaWithId): Promise<UserResponseSchema>{
        await this.FindById(id)

        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name,
                email,
                password
            },
            select: {
                id: true,
                name: true, 
                email: true
            }
        })

        return user 
    }
}