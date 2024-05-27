import { Department } from '../entities/department.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class DepartmentSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    // Insert many records in database.
    const departmentFactory = await factoryManager.get(Department);
    await departmentFactory.saveMany(5);
  }
}
