import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductInventory } from '../database/entities/product-inventory.entity';
import { CreateProductInventoryDto } from './dto/create-product-inventory.dto';
import { UpdateProductInventoryDto } from './dto/update-product-inventory.dto';

@Injectable()
export class ProductInventoryService {
  constructor(
    @InjectRepository(ProductInventory)
    private productInventoryRepository: Repository<ProductInventory>,
  ) {}

  async findAll(): Promise<ProductInventory[]> {
    return this.productInventoryRepository.find();
  }

  async findOneBy(query: { id: number }): Promise<ProductInventory> {
    const product = await this.productInventoryRepository.findOne({
      where: query,
    });
    if (!product) {
      throw new NotFoundException(`Product not found`);
    }
    return product;
  }

  async create(
    createProductInventoryDto: CreateProductInventoryDto,
  ): Promise<ProductInventory> {
    const productInventory = this.productInventoryRepository.create(
      createProductInventoryDto,
    );
    return this.productInventoryRepository.save(productInventory);
  }

  async update(
    id: number,
    updateProductInventoryDto: UpdateProductInventoryDto,
  ): Promise<ProductInventory> {
    const productInventory = await this.productInventoryRepository.findOneBy({ id: id });
    if (!productInventory) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    Object.assign(productInventory, updateProductInventoryDto);
    return this.productInventoryRepository.save(productInventory);
  }

  async delete(id: number): Promise<void> {
    const result = await this.productInventoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}
