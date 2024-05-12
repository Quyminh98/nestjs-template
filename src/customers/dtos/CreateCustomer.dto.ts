import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumberString,
  IsString,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';

export class CreateCustomerDto {
  @IsEmail()
  email: string;
  @IsNumberString()
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
