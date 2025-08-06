import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'contact'})
export class ContactEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255 })
    name: string;

    @Column({type: 'varchar', unique: true ,length: 255})
    email: string;

    @Column({type: 'varchar', length: 11})
    phone: string;

    @Column({type: 'varchar', length: 255})
    message: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}