import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDao } from 'src/common/daos/user.dao';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../domain/dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserDao)
    private readonly usersRepository: Repository<UserDao>,
  ) {}

  async findOneByNickname(telegramNickname: string): Promise<UserDao | null> {
    return await this.usersRepository.findOne({ where: { telegramNickname } });
  }

  async createUser(data: CreateUserDto): Promise<UserDao> {
    const newUser = this.usersRepository.create({
      name: data.name,
      telegramNickname: data.telegramNickname,
    });
    return await this.usersRepository.save(newUser);
  }
}
