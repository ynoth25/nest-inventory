import { Product } from '../entities/product.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class ProductSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    // Insert many records in database.
    const productFactory = await factoryManager.get(Product);
    await productFactory.saveMany(100);
  }
}
