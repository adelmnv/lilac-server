import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomDao } from 'src/common/daos/room.dao';
import { ParticipantsModule } from 'src/participants/participants.module';
import { UsersModule } from 'src/users/users.module';
import { RoomsService } from './domain/rooms.service';
import { RoomsRepository } from './data/rooms.repository';
import { RoomsController } from './presenter/rooms.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomDao]),
    forwardRef(() => ParticipantsModule),
    forwardRef(() => UsersModule),
  ],
  providers: [RoomsService, RoomsRepository],
  controllers: [RoomsController],
})
export class RoomsModule {}
