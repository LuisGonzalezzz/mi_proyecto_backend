import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehiclesService } from '../services/vehicles.service';
import { CreateVehicleDto } from '../dto/vehicle.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Post()
  createVehicle(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }
}
