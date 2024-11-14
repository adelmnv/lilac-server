import { MigrationInterface, QueryRunner } from 'typeorm';

export class CREATEPARTICIPANT1731601597095 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "participants" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "wishlist" character varying NOT NULL, 
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), 
        "deletedAt" TIMESTAMP, 
        "roomId" uuid, 
        "userId" uuid, 
        "participantReceiverId" uuid, 
        CONSTRAINT "REL_a5c697a23034eed2e634ee9242" UNIQUE ("participantReceiverId"), 
        CONSTRAINT "PK_1cda06c31eec1c95b3365a0283f" PRIMARY KEY ("id")
        CONSTRAINT "FK_f815beb05a2999cd74abf16948a" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        CONSTRAINT "FK_5fc9cddc801b973cd9edcdda42a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        CONSTRAINT "FK_a5c697a23034eed2e634ee92427" FOREIGN KEY ("participantReceiverId") REFERENCES "participants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "participants"`);
  }
}
