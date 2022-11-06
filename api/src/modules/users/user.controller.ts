import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { role as Role, user as UserModel } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async signupUser(
    @Body()
    userData: {
      name: string;
      username: string;
      password: string;
      role: Role;
    },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
