import { User } from './entities/user.entity';
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { Param, Put } from '@nestjs/common/decorators';
import { UpdateUserDto } from './dto/update-user.dto';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':address')
  getUser(@Param('address') address: string) {
    return this.userService.getUser(address);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Put()
  updateUser(@Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.updateUser(updateUserDto);
  }
}
