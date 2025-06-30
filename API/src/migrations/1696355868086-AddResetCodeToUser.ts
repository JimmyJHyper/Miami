import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddResetCodeToUser1696355868085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE users ADD COLUMN reset_code VARCHAR(4) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE users DROP COLUMN reset_code;`);
  }
}
