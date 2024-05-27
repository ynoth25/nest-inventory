import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/* eslint-disable @typescript-eslint/no-unused-vars */
@ObjectType()
@Entity('products')
export class Product {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({
    name: 'product_name',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  productName: string;

  @Field()
  @Column({
    name: 'barcode',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  barcode: string;

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
