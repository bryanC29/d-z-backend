/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class Address {
  @Prop({ required: true })
  line1: string;

  @Prop({ required: false })
  line2: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  code: number;

  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  alternate_number: string;

  @Prop({ enum: ['home', 'work'], required: true })
  type: 'home' | 'work';

  @Prop({ required: true })
  weekend_availability: boolean;
}

export const AddressSchema = SchemaFactory.createForClass(Address);

@Schema()
export class WishlistItem {
  @Prop({ required: true })
  product_id: string;
}

export const WishlistItemSchema = SchemaFactory.createForClass(WishlistItem);

@Schema()
export class CartItem {
  @Prop({ required: true })
  product_id: string;

  @Prop({ required: true })
  quantity: string;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);

@Schema()
export class User {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  contact_no: string;

  @Prop({ required: true })
  profile_url: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ type: [AddressSchema], required: true })
  address: Address[];

  @Prop({ type: [WishlistItemSchema], required: true })
  wishlist: WishlistItem[];

  @Prop({ type: [CartItemSchema], required: true })
  cart: CartItem[];

  @Prop({ type: [String], required: true })
  coupons_used: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
