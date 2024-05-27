import { DataSource } from 'typeorm';
import { runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension';
import { AppDataSource } from '../../data-source';
import userFactory from '../factories/user.factory';
import productFactory from '../factories/product.factory';
import productInventoryFactory from '../factories/product-inventory.factory';
import departmentFactory from '../factories/department.factory';
import UserSeeder from './user.seeder';
import productSeeder from './product.seeder';
import productInventorySeeder from './product-inventory.seeder';
import departmentSeeder from './department.seeder';

export default class MainSeeder implements Seeder {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [
        UserSeeder,
        productSeeder,
        productInventorySeeder,
        departmentSeeder,
      ],
      factories: [
        userFactory,
        productFactory,
        productInventoryFactory,
        departmentFactory,
      ],
    });
  }
}

async function run() {
  const connection = await AppDataSource.connect();
  const factoryManager = new SeederFactoryManager();

  const seeder = new MainSeeder();
  await seeder.run(AppDataSource, factoryManager);

  await connection.close();
}

run().catch((error) => console.error(error));
