import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../data/users.repository';
import { UserDao } from 'src/common/daos/user.dao';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UsersRepository) {}

  async findOneByNickname(
    telegramNickname: string,
  ): Promise<UserDao | undefined> {
    return this.userRepository.findOneByNickname(telegramNickname);
  }

  async create(data: CreateUserDto): Promise<UserDao> {
    return this.userRepository.createUser(data);
  }
}
