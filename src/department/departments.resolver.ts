import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { DepartmentsService } from './departments.service';
import { Department } from '../database/entities/department.entity';

/* eslint-disable @typescript-eslint/no-unused-vars */
@Resolver((of) => Department)
export class DepartmentsResolver {
  constructor(private departmentService: DepartmentsService) {}

  @Query((returns) => [Department])
  async departments(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Query((returns) => Department, { nullable: true })
  async department(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Department> {
    return this.departmentService.findOneBy({ id: id });
  }

  // @Mutation((returns) => Department)
  // createUser(@Args('name') name: string, @Args('email') email: string) {
  //   return this.departmentService.create(name, email);
  // }
}
