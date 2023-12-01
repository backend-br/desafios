import { Column, Entity, Long, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    userDocument: string;

    @Column()
    creditCardToken: string;

    @Column()
    value: Long
}