import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Sale } from '../entities/sale.entity';

import { CreateSaleDto } from '../dto/create-sale.dto';
import { UpdateSaleDto } from '../dto/update-sale.dto';

@Injectable()
export class SalesService {

  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
  ) {}

  create(createSaleDto: CreateSaleDto) {

    const sale =
      this.saleRepository.create(createSaleDto);

    return this.saleRepository.save(sale);
  }

  findAll() {
    return this.saleRepository.find({
      relations: ['customer', 'vehicle'],
    });
  }

  findOne(id: number) {
    return this.saleRepository.findOne({
      where: { id },
      relations: ['customer', 'vehicle'],
    });
  }

  async update(
    id: number,
    updateSaleDto: UpdateSaleDto,
  ) {

    await this.saleRepository.update(
      id,
      updateSaleDto,
    );

    return this.findOne(id);
  }

  async remove(id: number) {

    const sale = await this.findOne(id);

    if (!sale) {
      return 'Venta no encontrada';
    }

    await this.saleRepository.delete(id);

    return 'Venta eliminada';
  }
}