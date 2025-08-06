import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Notice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    img: string;
    
    @Column({type: "varchar", length: 255})
    title: string;

    @Column({type: "text"})
    description: string;

    @Column({type: "boolean", default: true})
    status: boolean;
    
    @CreateDateColumn()
    createdAt?: Date;
    
    @Column({type: "date"})
    expirationDate?: Date;
}