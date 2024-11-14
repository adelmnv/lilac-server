import { Injectable } from '@nestjs/common';
import { RoomsRepository } from '../data/rooms.repository';

@Injectable()
export class RoomsService {
  constructor(private readonly roomsRepository: RoomsRepository) {}
}
