import { MigrationInterface, QueryRunner } from 'typeorm';

export class addPublicNameField1674772639280 implements MigrationInterface {
  name = 'addPublicNameField1674772639280';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "publicName" character varying(30)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "publicName"`);
  }
}
