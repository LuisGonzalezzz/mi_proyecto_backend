import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Sale } from '../../sales/entities/sale.entity';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('increment', { type: 'int4' })
  id: number;

  @Column({ type: 'int4' })
  model_id: number;

  @Column({ type: 'varchar', length: 50 })
  vin: string;

  @Column({ type: 'int4' })
  year: number;

  @Column({ type: 'varchar', length: 50 })
  color: string;

  @Column({ type: 'int4', default: 0 })
  milage: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  deleted_at: Date;

  @OneToMany(() => Sale, (sale) => sale.vehicle)
  sales: Sale[];
}
