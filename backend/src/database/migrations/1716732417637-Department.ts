import { MigrationInterface, QueryRunner } from 'typeorm';

export class Department1716732417637 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE departments (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS departments;`);
  }
}
