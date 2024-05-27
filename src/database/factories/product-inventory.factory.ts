import { setSeederFactory } from 'typeorm-extension';
import { ProductInventory } from '../entities/product-inventory.entity';

export default setSeederFactory(ProductInventory, async (faker) => {
  const inventory = new ProductInventory();
  inventory.inventoryTag = faker.datatype.uuid();
  inventory.productId = faker.datatype.number({ min: 1, max: 100 });
  inventory.userId = Number(faker.datatype.number({ min: 1, max: 5 }));
  inventory.cost = Number(faker.commerce.price(1, 1000, 2));
  inventory.srp = Number(faker.commerce.price(100, 2000, 2));
  inventory.quantity = faker.datatype.number({ min: 1, max: 100 });
  inventory.category = faker.commerce.department();

  return inventory;
});
