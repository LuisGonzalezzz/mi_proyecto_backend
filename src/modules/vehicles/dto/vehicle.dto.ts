import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString, MinLength, IsPositive } from 'class-validator';

export class CreateVehicleDto {
    @IsOptional()
    @IsNumber()
    @ApiProperty()
    id: number;
    @ApiProperty()
    @IsInt()
    @IsOptional()
    model_id: number;
    @ApiProperty()
    @MinLength(3)
    @IsString()
    vin: string;
    @ApiProperty()
    @IsInt()
    @IsOptional()
    @IsPositive()
    year: number;
    @ApiProperty()
    @IsString()
    @IsOptional()
    color: string;
    @ApiProperty()
    @IsInt()
    @IsOptional()
    mileage: number;
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    price: number;
    @ApiProperty()
    @IsString()
    @IsOptional()
    status: string;
}

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {

}
