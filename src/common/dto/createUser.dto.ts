/* eslint-disable prettier/prettier */
import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsString,
  IsUrl,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class AddressDto {
  @IsString()
  @MinLength(1)
  line1: string;

  @IsString()
  line2: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  code: number;

  @IsString()
  number: string;

  @IsString()
  alternate_number: string;

  @IsEnum(['home', 'work'])
  type: 'home' | 'work';

  weekend_availability: boolean;
}

class WishlistItemDto {
  @IsString()
  product_id: string;
}

class CartItemDto {
  @IsString()
  product_id: string;

  @IsString()
  quantity: string;
}

export class CreateUserDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsMobilePhone()
  contact_no: string;

  @IsUrl()
  profile_url: string;

  @IsDate()
  dob: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  address: AddressDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WishlistItemDto)
  wishlist: WishlistItemDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  cart: CartItemDto[];

  @IsArray()
  @IsString({ each: true })
  coupons_used: string[];
}
