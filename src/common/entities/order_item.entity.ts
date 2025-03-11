/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    default: 1,
  })
  user_id: number;

  @Column({
    type: 'int',
  })
  product_id: number;
}
