import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from '../database/entities/product.entity';

/* eslint-disable @typescript-eslint/no-unused-vars */
@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query((returns) => [Product])
  async products(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Query((returns) => Product, { nullable: true })
  async product(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.findOneBy({ id: id });
  }

  // @Mutation((returns) => User)
  // createUser(@Args('name') name: string, @Args('email') email: string) {
  //   return this.usersService.create(name, email);
  // }
}
