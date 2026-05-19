import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDto {

  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}