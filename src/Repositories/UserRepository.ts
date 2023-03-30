import { User, UserResponse } from "../Models/UserModel";
import { prisma } from "../Utils/prisma/prisma";

type UserProps = {
    name: string
    email: string
    hashPassword: string
}

export interface IUserRepository{
    Create({ name, email, hashPassword }: UserProps): Promise<UserResponse>
    FindByEmail(email: string): Promise<User>
    FindById(id: string): Promise<UserResponse>
    ListAll(): Promise<UserResponse[]>
    Delete(id: string): Promise<void>
    Update({ id, name, email, password }: User): Promise<UserResponse>
}

export class UserRepository implements IUserRepository {
  async Create({
    name,
    email,
    hashPassword,
  }: UserProps): Promise<UserResponse> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }

  async FindByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }

  async FindById(id: string): Promise<UserResponse> {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }

  async ListAll(): Promise<UserResponse[]> {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return users;
  }

  async Delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async Update({ id, name, email, password }: User): Promise<UserResponse> {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}