import { MAX_BIO_LENGTH, MAX_NAME_LENGTH } from './../utility/user-constants';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ required: false })
  @Expose()
  @MaxLength(MAX_NAME_LENGTH, {
    message:
      'Address is too long. It should be $constraint1 characters, but actual is $value',
  })
  name: string;

  @ApiProperty({ required: false })
  @Expose()
  @MaxLength(MAX_BIO_LENGTH, {
    message:
      'Address is too long. It should be $constraint1 characters, but actual is $value',
  })
  bio: string;

  @ApiProperty()
  @IsNotEmpty()
  signature: string;

  @ApiProperty()
  @IsNotEmpty()
  message: string;
}
