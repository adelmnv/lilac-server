import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../domain/users.service';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UserDao } from 'src/common/daos/user.dao';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDao> {
    return this.userService.create(createUserDto);
  }
}
