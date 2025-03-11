/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  code: string;

  @Column({
    type: 'int',
  })
  discount: number;

  @Column({
    type: 'int',
  })
  max_discount: number;

  @Column({
    type: 'int',
  })
  min_price: number;

  @Column({
    type: 'boolean',
  })
  one_time_use: boolean;

  @Column({
    type: 'text',
  })
  description: string;
}
