import {Entity, PrimaryGeneratedColumn} from "typeorm";
import { Brand} from "../../brands/entities/brand.entity";
import {Column, JoinColumn, ManyToOne} from "typeorm";

@Entity("vehicle_models")
export class VehicleModel{
    @PrimaryGeneratedColumn("increment", {type: "int4"})
    id: number;

    @Column({type: "int4"})
    brand_id: number;

    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "varchar", length: 255})
    type: string

    @ManyToOne(() => Brand, {eager: true})
    @JoinColumn({name: "brand_id"})
    brand: Brand;

}