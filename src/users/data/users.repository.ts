import { Injectable } from '@nestjs/common';
import { UserDao } from 'src/common/daos/user.dao';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersRepository extends Repository<UserDao> {
  constructor(private dataSource: DataSource) {
    super(UserDao, dataSource.createEntityManager());
  }
}
