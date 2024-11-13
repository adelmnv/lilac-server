import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoomDao } from './room.dao';
import { UserDao } from './user.dao';

@Entity('participants')
export class ParticipantDao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RoomDao, (room) => room.participants)
  @JoinColumn()
  room: RoomDao;

  @ManyToOne(() => UserDao, (user) => user.participations)
  @JoinColumn()
  user: UserDao;

  @OneToOne(() => ParticipantDao, { nullable: true })
  @JoinColumn()
  participantReceiver: ParticipantDao | null;

  @Column({ type: 'varchar' })
  wishlist: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | null;
}
