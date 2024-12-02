import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { ParticipantsModule } from './participants/participants.module';
import databaseConfig from './common/config/database.config';
import { daos } from './common/daos';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: databaseConfig.host,
      port: +databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.database,
      entities: daos,
      synchronize: false,
    }),
    UsersModule,
    RoomsModule,
    ParticipantsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
