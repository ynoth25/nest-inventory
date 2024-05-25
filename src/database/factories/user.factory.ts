import { hash } from 'bcrypt';
import { setSeederFactory } from 'typeorm-extension';

import { User, UserRole } from '../entities/user.entity';

export default setSeederFactory(User, async (faker) => {
  const user = new User();

  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.userName = faker.internet.userName(user.firstName, user.lastName);
  user.email = faker.internet.email(user.firstName, user.lastName);
  user.password = await hash('testpassword', 10);
  user.phone = faker.phone.number();
  user.avatar = faker.image.avatar();
  user.role = faker.helpers.arrayElement([
    UserRole.ADMIN,
    UserRole.SUPERVISOR,
    UserRole.CLERK,
  ]);
  user.isActivated = faker.datatype.boolean();

  return user;
});
