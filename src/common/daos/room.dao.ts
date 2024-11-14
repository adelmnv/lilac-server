import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserDao } from './user.dao';
import { ParticipantDao } from './participant.dao';

@Entity('rooms')
export class RoomDao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserDao, (user) => user.rooms)
  @JoinColumn()
  creatorUser: UserDao;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'timestamp' })
  celebrationDate: Date;

  @Column({ type: 'integer', nullable: true, default: null })
  minBudget: number;

  @Column({ type: 'integer', nullable: true, default: null })
  maxBudget: number;

  @OneToMany(() => ParticipantDao, (participant) => participant.room)
  participants: ParticipantDao[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | null;
}
