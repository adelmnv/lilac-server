import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDao } from 'src/common/daos/user.dao';
import { ParticipantsModule } from 'src/participants/participants.module';
import { RoomsModule } from 'src/rooms/rooms.module';
import { UsersRepository } from './data/users.repository';
import { UserService } from './domain/users.service';
import { UsersController } from './presenter/users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDao]),
    RoomsModule,
    ParticipantsModule,
  ],
  providers: [UsersRepository, UserService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UsersModule {}
