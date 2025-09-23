import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleService } from './roles.service';
import type { Response } from 'express';


@Controller('roles')

export class RoleController {
  constructor(private readonly roleService: RoleService) {}



  @Post()
  create(@Body() dto: CreateRoleDto) {
     return this.roleService.createRole(dto);
  }



  

  @Get()
  findAll() {
    return this.roleService.getRoles();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.getRoleById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
    return this.roleService.updateRole(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {


     return this.roleService.deleteRole(Number(id));

  }
}
