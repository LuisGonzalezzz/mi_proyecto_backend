import {
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateSaleDto {

  @IsNumber()
  customer_id: number;

  @IsNumber()
  vehicle_id: number;

  @IsNumber()
  total_price: number;

  @IsDateString()
  sale_date: Date;
}