import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomersService {

  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {

    const customer =
      this.customerRepository.create(createCustomerDto);

    return this.customerRepository.save(customer);
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id: number) {
    return this.customerRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ) {

    await this.customerRepository.update(
      id,
      updateCustomerDto,
    );

    return this.findOne(id);
  }

  async remove(id: number) {

    const customer = await this.findOne(id);

    if (!customer) {
      return 'Customer no encontrado';
    }

    await this.customerRepository.delete(id);

    return 'Customer eliminado';
  }
}