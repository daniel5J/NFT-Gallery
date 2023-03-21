import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
export class UpdateUserDto extends CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
