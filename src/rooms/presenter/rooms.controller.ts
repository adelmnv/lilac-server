import { Controller } from '@nestjs/common';
import { RoomsService } from '../domain/rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}
}
