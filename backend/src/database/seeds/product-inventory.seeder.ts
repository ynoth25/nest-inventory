import { ProductInventory } from '../entities/product-inventory.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class ProductInventorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    // Insert many records in database.
    const productInventoryFactory = await factoryManager.get(ProductInventory);
    await productInventoryFactory.saveMany(40);
  }
}
