import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDecimal,
  Min,
} from 'class-validator';

@InputType()
export class CreateProductInventoryDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  inventoryTag: string;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @Field()
  @IsDecimal()
  @Min(0)
  cost: number;

  @Field()
  @IsDecimal()
  @Min(0)
  srp: number;

  @Field()
  @IsNumber()
  @Min(0)
  quantity: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  category: string;
}
