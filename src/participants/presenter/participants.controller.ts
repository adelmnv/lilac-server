import { Controller } from '@nestjs/common';
import { ParticipantsService } from '../domain/participants.service';

@Controller('participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}
}
