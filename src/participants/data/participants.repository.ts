import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParticipantDao } from 'src/common/daos/participant.dao';
import { Repository } from 'typeorm';

@Injectable()
export class ParticipantsRepository {
  constructor(
    @InjectRepository(ParticipantDao)
    private readonly participantsRepository: Repository<ParticipantDao>,
  ) {}
}
