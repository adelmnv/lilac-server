import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantDao } from 'src/common/daos/participant.dao';
import { RoomsModule } from 'src/rooms/rooms.module';
import { UsersModule } from 'src/users/users.module';
import { ParticipantsRepository } from './data/participants.repository';
import { ParticipantsService } from './domain/participants.service';
import { ParticipantsController } from './presenter/participants.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParticipantDao]),
    RoomsModule,
    UsersModule,
  ],
  providers: [ParticipantsRepository, ParticipantsService],
  controllers: [ParticipantsController],
})
export class ParticipantsModule {}
