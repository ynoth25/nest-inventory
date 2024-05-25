import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../database/entities/user.entity';

/* eslint-disable @typescript-eslint/no-unused-vars */
@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query((returns) => User, { nullable: true })
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.findOneBy({ id: id });
  }

  // @Mutation((returns) => User)
  // createUser(@Args('name') name: string, @Args('email') email: string) {
  //   return this.usersService.create(name, email);
  // }
}
