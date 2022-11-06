import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { user as User, Prisma, role as Role } from '@prisma/client';

import { FindUsersDTO } from './dto/find-users';
import { CreateUserDTO } from './dto/create-user';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.userWhereUniqueInput,
  ): Promise<Partial<User> | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      select: { id: true, name: true, username: true, password: false },
    });
  }

  async users(params: FindUsersDTO): Promise<Partial<User>[]> {
    return this.prisma.user.findMany({
      ...params,
      select: { id: true, name: true, username: true, password: false },
    });
  }

  async createUser(data: CreateUserDTO): Promise<Partial<User>> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);

    return this.prisma.user.create({
      data: {
        ...data,
        password: hash,
        role: Role.USER,
      },
      select: { id: true, name: true, username: true, password: false },
    });
  }

  async updateUser(params: {
    where: Prisma.userWhereUniqueInput;
    data: Prisma.userUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.userWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
