export class Participant {
  id: string;
  roomId: string;
  userId: string;
  participantReceiverId: string | null;
  wishlist: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
