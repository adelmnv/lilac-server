export class Room {
  id: string;
  creatorUserId: string;
  name: string;
  celebrationDate: Date;
  minBudget: number | null;
  maxBudget: number | null;
  participantIds: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
