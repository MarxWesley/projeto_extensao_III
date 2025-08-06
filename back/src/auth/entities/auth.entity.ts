import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "auth"})
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;
}
