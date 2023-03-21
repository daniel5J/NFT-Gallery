import { MigrationInterface, QueryRunner } from "typeorm";

export class removePublicName1674784055932 implements MigrationInterface {
    name = 'removePublicName1674784055932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "publicName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "publicName" character varying(30)`);
    }

}
