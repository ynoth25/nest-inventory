import { setSeederFactory } from 'typeorm-extension';
import { Product } from '../entities/product.entity';

export default setSeederFactory(Product, async (faker) => {
  const product = new Product();

  product.productName = faker.commerce.productName();
  product.barcode = faker.string.uuid();

  return product;
});
