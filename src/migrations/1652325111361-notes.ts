import { MigrationInterface, QueryRunner } from 'typeorm';

export class notes1652325111361 implements MigrationInterface {
  tableName = 'notes';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable({
      name: this.tableName,
      columns: [
        // @ts-expect-error only required properties are defined
        {
          name: 'id',
          isPrimary: true,
          isUnique: true,
          type: 'int',
          isGenerated: true,
          isNullable: false,
        },
        // @ts-expect-error only required properties are defined
        {
          name: 'content',
          type: 'varchar',
          isNullable: false,
          length: '2000',
        },
        // @ts-expect-error only required properties are defined
        {
          name: 'created_at',
          type: 'timestamp',
          isNullable: false,
        },
        // @ts-expect-error only required properties are defined
        {
          name: 'updated_at',
          type: 'timestamp',
          isNullable: true,
        },
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
