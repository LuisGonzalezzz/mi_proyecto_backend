import { Controller, Post, Body } from '@nestjs/common';
import { ModelsService } from '../services/models.service';
import { CreateVehicleModelDto } from '../dto/model.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('models')
@Controller('models')
export class ModelsController {
    constructor(private readonly modelsService: ModelsService) {}

    @Post()
    create(@Body() createVehicleModelDto: CreateVehicleModelDto) {
        return this.modelsService.create(createVehicleModelDto);
    }
}
