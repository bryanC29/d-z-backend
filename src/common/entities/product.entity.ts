/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
  })
  category: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  image: string;

  @Column({
    type: 'int',
  })
  price: number;

  @Column({
    type: 'int',
  })
  offer_price: number;
}
