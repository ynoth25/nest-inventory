import { InputType, Field, PartialType } from '@nestjs/graphql';
import {
  IsString,
  IsNumber,
  IsDecimal,
  IsOptional,
  Min,
} from 'class-validator';
import { CreateProductInventoryDto } from './create-product-inventory.dto';

@InputType()
export class UpdateProductInventoryDto extends PartialType(
  CreateProductInventoryDto,
) {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  inventoryTag?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  productId?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  userId?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsDecimal()
  @Min(0)
  cost?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsDecimal()
  @Min(0)
  srp?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  quantity?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  category?: string;
}
