import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProductInventoryService } from './product-inventory.service';
import { ProductInventory } from '../database/entities/product-inventory.entity';

/* eslint-disable @typescript-eslint/no-unused-vars */
@Resolver((of) => ProductInventory)
export class ProductInventoryResolver {
  constructor(private productInventoryService: ProductInventoryService) {}

  @Query((returns) => [ProductInventory])
  async products(): Promise<ProductInventory[]> {
    return this.productInventoryService.findAll();
  }

  @Query((returns) => ProductInventory, { nullable: true })
  async product(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<ProductInventory> {
    return this.productInventoryService.findOneBy({ id: id });
  }

  // @Mutation((returns) => User)
  // createUser(@Args('name') name: string, @Args('email') email: string) {
  //   return this.usersService.create(name, email);
  // }
}
