import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { BrandsService } from '../services/brands.service';
import { CreateBrandDto } from '../dto/brand.dto';
import { UpdateBrandDto } from '../dto/brand.dto';
import { ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Patch(":id")
  update(
  @Param("id", ParseIntPipe) id: number,
  @Body() updateBrandDto: UpdateBrandDto
  ) {
    return this.brandsService.update(id, updateBrandDto);
  }

  @Delete (":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.brandsService.remove(id);
  }
}
