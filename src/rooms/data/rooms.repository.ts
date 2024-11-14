import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomDao } from 'src/common/daos/room.dao';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsRepository {
  constructor(
    @InjectRepository(RoomDao)
    private readonly roomsRepository: Repository<RoomDao>,
  ) {}
}
