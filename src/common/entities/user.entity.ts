export class User {
  id: string;
  name: string;
  tgNickname: string | null;
  roomIds: string[];
  participationIds: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
