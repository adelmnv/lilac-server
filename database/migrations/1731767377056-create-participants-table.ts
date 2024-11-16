import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateParticipantsTable1731767377056
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'participants',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`,
          },
          {
            name: 'room_id',
            type: 'uuid',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'participant_receiver_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'wishlist',
            type: 'varchar',
            length: '500',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'participants',
      new TableForeignKey({
        name: 'participants_room_id_foreign_key',
        columnNames: ['room_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rooms',
      }),
    );

    await queryRunner.createForeignKey(
      'participants',
      new TableForeignKey({
        name: 'participants_user_id_foreign_key',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
      }),
    );

    await queryRunner.createForeignKey(
      'participants',
      new TableForeignKey({
        name: 'participants_participant_receiver_id_foreign_key',
        columnNames: ['participant_receiver_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'participants',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'rooms',
      'participants_room_id_foreign_key',
    );
    await queryRunner.dropForeignKey(
      'users',
      'participants_user_id_foreign_key',
    );
    await queryRunner.dropForeignKey(
      'participants',
      'participants_participant_receiver_id_foreign_key',
    );
    await queryRunner.dropTable('participants');
  }
}
