import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  SUPERVISOR = 'supervisor',
  CLERK = 'clerk',
}

registerEnumType(UserRole, {
  name: 'UserRole', // this one is mandatory
  description: 'The basic roles of users', // this one is optional
});

/* eslint-disable @typescript-eslint/no-unused-vars */
@ObjectType()
@Entity('users')
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  firstName: string;

  @Field()
  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  lastName: string;

  @Field()
  @Column({
    name: 'user_name',
    type: 'varchar',
    length: 100,
    unique: true,
  })
  userName: string;

  @Field()
  @Column({
    type: 'varchar',
    length: 320,
    nullable: true,
    default: null,
  })
  email: string;

  @Field()
  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  @Field()
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    default: null,
  })
  phone: string;

  @Field()
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    default: 0,
  })
  avatar: string;

  @Field()
  @Column({
    type: 'int',
    nullable: true,
    default: null,
  })
  department: number;

  @Field((type) => UserRole)
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CLERK,
  })
  role: UserRole;

  @Field()
  @Column({
    name: 'is_activated',
    type: 'boolean',
    default: true,
  })
  isActivated: boolean;

  @Field()
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Field({ nullable: true })
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Field({ nullable: true })
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  deletedAt: Date;
}
