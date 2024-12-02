import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoomDao } from './room.dao';
import { ParticipantDao } from './participant.dao';

@Entity('users')
export class UserDao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 255,
    name: 'telegram_nickname',
  })
  telegramNickname: string;

  @OneToMany(() => RoomDao, (room) => room.creatorUser)
  rooms: RoomDao[];

  @OneToMany(() => ParticipantDao, (participant) => participant.user)
  participations: ParticipantDao[];

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  deletedAt: Date | null;
}
