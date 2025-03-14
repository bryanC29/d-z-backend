/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Review {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  comment: string;

  @Prop({ type: [String], required: true })
  media: string[];

  @Prop({ required: true })
  rating: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

@Schema()
export class Faq {
  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  answer: string;
}

export const FaqSchema = SchemaFactory.createForClass(Faq);

@Schema()
export class Product {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], required: true })
  media: string[];

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  offer_price: number;

  @Prop({ required: true })
  details: string;

  @Prop({ type: [String], required: true })
  gallery: string[];

  @Prop({ type: [String], required: true })
  top_points: string[];

  @Prop({ type: [ReviewSchema], required: true })
  reviews: Review[];

  @Prop({ type: [FaqSchema], required: true })
  faq: Faq[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
