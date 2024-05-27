import { setSeederFactory } from 'typeorm-extension';
import { Department } from '../entities/department.entity';

export default setSeederFactory(Department, async (faker) => {
  const userDepartment = new Department();
  userDepartment.name = faker.commerce.department();

  return userDepartment;
});
