import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn, 
} from "typeorm";

@Entity()
export class Vehicle {
    // @PrimaryGeneratedColumn('increment', {type: 'int4'}) // no es necesario todo eso especifico, la primary lo hace sin necesidad de especifica.
    @PrimaryGeneratedColumn()
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

    // Los que simulan parte del CRUD son datos para llevar un registro en puntos importantes que se crean donde las tablas se relacionan mucho con otras, asi tener un registro de fecha y hora, mas autores de dicho cambio
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    deleted_at: Date;
}
