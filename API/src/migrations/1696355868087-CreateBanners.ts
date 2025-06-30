import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBannersTable1696355868087 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'banners',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'alt_text',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'url',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'is_enabled',
            type: 'boolean',
            length: '255',
          },
          {
            name: 'positions',
            type: 'json',
          },
          {
            name: 'media_item_id',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['media_item_id'],
            referencedTableName: 'media_items',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('banners');
  }
}
