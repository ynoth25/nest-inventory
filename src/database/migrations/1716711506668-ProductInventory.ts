import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductInventory1716711506668 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE product_inventory (
      id SERIAL PRIMARY KEY,
      inventory_tag VARCHAR(150) NOT NULL,
      product_id INT NOT NULL,
      user_id INT NOT NULL,
      cost DECIMAL(10, 2) NOT NULL,
      srp DECIMAL(10, 2) NOT NULL,
      quantity INT NOT NULL,
      category VARCHAR(100) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS product_inventory;`);
  }
}
