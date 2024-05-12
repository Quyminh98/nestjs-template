import { IsEmail, IsNumberString, IsString, IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  line1: string;
  line2?: string;
  @IsNotEmpty()
  zip: string;
}
