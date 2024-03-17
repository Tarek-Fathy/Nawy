import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  renting_price: number;

  @Column()
  buying_price: number;
}