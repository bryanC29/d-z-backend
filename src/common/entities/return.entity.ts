/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ReturnStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export enum TrackingStatus {
  PENDING = 'pending',
  PICKED = 'picked',
  PROCESSING = 'processing',
  DECLINED = 'declined',
  REFUNDED = 'refunded',
}

@Entity()
export class Return {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: false,
  })
  user_id: string;

  @Column({
    type: 'enum',
    enum: ReturnStatus,
    default: ReturnStatus.PENDING,
  })
  status: string;

  @Column({
    type: 'enum',
    enum: TrackingStatus,
    default: TrackingStatus.PENDING,
  })
  tracking_status: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  order_id: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  order_item: number;
}
