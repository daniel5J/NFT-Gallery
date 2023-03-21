import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUserTable1674771200827 implements MigrationInterface {
  name = 'createUserTable1674771200827';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "name" character varying(30), "bio" character varying(5000), CONSTRAINT "UQ_3122b4b8709577da50e89b68983" UNIQUE ("address"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
