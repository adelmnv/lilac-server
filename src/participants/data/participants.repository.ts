import { Injectable } from '@nestjs/common';
import { ParticipantDao } from 'src/common/daos/participant.dao';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ParticipantsRepository extends Repository<ParticipantDao> {
  constructor(private dataSource: DataSource) {
    super(ParticipantDao, dataSource.createEntityManager());
  }
}
