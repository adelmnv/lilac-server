import { Injectable } from '@nestjs/common';
import { RoomDao } from 'src/common/daos/room.dao';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class RoomsRepository extends Repository<RoomDao> {
  constructor(private dataSource: DataSource) {
    super(RoomDao, dataSource.createEntityManager());
  }
}
