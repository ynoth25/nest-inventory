import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly productName: string;

  @IsString()
  @IsNotEmpty()
  readonly barcode: string;
}
