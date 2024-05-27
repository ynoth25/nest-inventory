import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from './product.entity';
import { User } from './user.entity';

@ObjectType()
@Entity('product_inventory')
export class ProductInventory {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ name: 'inventory_tag', nullable: true, default: 'TAG' })
  inventoryTag: string;

  @Field({ nullable: false })
  @Column({ name: 'product_id' })
  productId: number;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Field({ nullable: false })
  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @Column('decimal', { precision: 10, scale: 2, default: 0.0 })
  cost: number;

  @Field()
  @Column('decimal', { precision: 10, scale: 2, default: 0.0 })
  srp: number;

  @Field()
  @Column()
  quantity: number;

  @Field()
  @Column()
  category: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field()
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
