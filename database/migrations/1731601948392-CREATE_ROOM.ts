import { MigrationInterface, QueryRunner } from 'typeorm';

export class CREATEROOM1731601948392 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "rooms" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "name" character varying NOT NULL, 
            "celebrationDate" TIMESTAMP NOT NULL, 
            "minBudget" integer, 
            "maxBudget" integer, 
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(), 
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), 
            "deletedAt" TIMESTAMP, 
            "creatorUserId" uuid, 
            CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id")
            CONSTRAINT "FK_30490d667e311380a79a938bfb5" FOREIGN KEY ("creatorUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "rooms"`);
  }
}
