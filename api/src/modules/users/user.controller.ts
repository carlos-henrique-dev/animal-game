import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { user as UserModel } from '@prisma/client';
import { FindUsersDTO } from './dto/find-users';
import { CreateUserDTO } from './dto/create-user';
import { FindUserDto } from './dto/find-user';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async signupUser(
    @Body()
    userData: CreateUserDTO,
  ): Promise<Partial<UserModel> | string> {
    const user = await this.userService.user({ username: userData.username });

    if (user) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    return this.userService.createUser(userData);
  }

  @Get('user')
  async findUsers(
    @Param()
    filters: FindUsersDTO,
  ): Promise<Partial<UserModel>[]> {
    return this.userService.users(filters);
  }

  @Get('user/:username')
  async findUser(
    @Param()
    params: FindUserDto,
  ): Promise<Partial<UserModel>> {
    const user = await this.userService.user({ username: params.username });

    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }

    return user;
  }
}
