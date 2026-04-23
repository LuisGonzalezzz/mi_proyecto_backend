import {Injectable } from '@nestjs/common';
import { CreateVehicleDto } from '../dto/vehicle.dto';

@Injectable()
export class VehiclesService {
    constructor() { }

    create(createVehicleDto: CreateVehicleDto) {
        return createVehicleDto;


    }
}   

