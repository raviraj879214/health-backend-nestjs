// src/users/users.controller.ts
import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Get()
  findAll() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.updateUser(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}
