import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInventoryService } from './product-inventory.service';
import { ProductInventoryResolver } from './product-inventory.resolver';
import { ProductInventoryController } from './product-inventory.controller';
import { ProductInventory } from '../database/entities/product-inventory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInventory])],
  providers: [ProductInventoryService, ProductInventoryResolver],
  controllers: [ProductInventoryController],
  exports: [ProductInventoryService],
})
export class ProductInventoryModule {}
