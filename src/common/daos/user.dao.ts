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

  @Column({ type: 'varchar', nullable: true, length: 255 })
  tgNickname: string;

  @OneToMany(() => RoomDao, (room) => room.creatorUser)
  rooms: RoomDao[];

  @OneToMany(() => ParticipantDao, (participant) => participant.user)
  participations: ParticipantDao[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | null;
}
