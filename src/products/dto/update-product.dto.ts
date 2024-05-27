import { IsString, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  readonly productName?: string;

  @IsOptional()
  @IsString()
  readonly barcode?: string;
}
