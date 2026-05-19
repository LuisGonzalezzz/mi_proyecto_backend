import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { Customer } from '../../customers/entities/customer.entity';

@Entity()
export class Sale {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_price: number;

  @Column({ type: 'date' })
  sale_date: Date;

  @Column()
  vehicle_id: number;

  @Column()
  customer_id: number;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.sales)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle;

  @ManyToOne(() => Customer, (customer) => customer.sales)
@JoinColumn({ name: 'customer_id' })
customer: Customer;
}
