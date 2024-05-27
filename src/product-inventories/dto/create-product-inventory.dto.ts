import { InputType, Field, Float } from '@nestjs/graphql';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
} from 'class-validator';

@InputType()
export class CreateProductInventoryDto {
  @Field()
  @IsString()
  inventoryTag: string;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  cost: number;

  @Field(() => Float)
  @IsNumber()
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
