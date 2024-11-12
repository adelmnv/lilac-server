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
import { Room } from './room.dao';
import { User } from './user.dao';

@Entity('participants')
export class Participant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Room, (room) => room.participants)
  @JoinColumn()
  room: Room;

  @ManyToOne(() => User, (user) => user.participations)
  @JoinColumn()
  user: User;

  @OneToOne(() => Participant, { nullable: true })
  @JoinColumn()
  participantReceiver: Participant | null;

  @Column({ type: 'varchar' })
  wishlist: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | null;
}
