import { Injectable } from '@nestjs/common';
import { ParticipantsRepository } from '../data/participants.repository';

@Injectable()
export class ParticipantsService {
  constructor(
    private readonly participantsRepository: ParticipantsRepository,
  ) {}
}
