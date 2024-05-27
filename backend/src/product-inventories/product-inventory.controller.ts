import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductInventoryService } from './product-inventory.service';
import { ProductInventory } from '../database/entities/product-inventory.entity';
import { CreateProductInventoryDto } from './dto/create-product-inventory.dto';
import { UpdateProductInventoryDto } from './dto/update-product-inventory.dto';

@Controller('product_inventory')
export class ProductInventoryController {
  constructor(private productInventoryService: ProductInventoryService) {}

  @Post()
  create(@Body() createProductInventoryDto: CreateProductInventoryDto) {
    return this.productInventoryService.create(createProductInventoryDto);
  }

  @Get()
  async findAll(): Promise<ProductInventory[]> {
    return this.productInventoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ProductInventory> {
    return this.productInventoryService.findOneBy({ id: id });
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductInventoryDto,
  ): Promise<ProductInventory> {
    return this.productInventoryService.update(id, updateProductDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.productInventoryService.delete(id);
  }
}
