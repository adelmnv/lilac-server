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
import { User } from './user.dao';
import { Participant } from './participant.dao';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.rooms)
  @JoinColumn()
  creatorUser: User;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'timestamp' })
  celebrationDate: Date;

  @Column({ type: 'integer', nullable: true, default: null })
  minBudget: number;

  @Column({ type: 'integer', nullable: true, default: null })
  maxBudget: number;

  @OneToMany(() => Participant, (participant) => participant.room)
  participants: Participant[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | null;
}
