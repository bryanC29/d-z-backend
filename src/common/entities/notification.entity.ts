/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum NotificationType {
  ALERT = 'alert',
  WARNING = 'warning',
  INFO = 'info',
  ERROR = 'error',
}

export enum NotificationStatus {
  READ = 'read',
  UNREAD = 'unread',
}

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 36,
  })
  user_id: string;

  @Column({
    type: 'enum',
    enum: NotificationType,
    default: NotificationType.INFO,
  })
  type: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 255,
  })
  title: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  body: string;

  @Column({
    type: 'enum',
    enum: NotificationStatus,
    default: NotificationStatus.UNREAD,
  })
  status: string;
}
