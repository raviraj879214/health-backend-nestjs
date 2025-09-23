// src/role-modules/role-modules.controller.ts
import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { RoleModulesService } from './role-modules.service';
import { AssignModulesDto } from './dto/assign-modules.dto';
import { RemoveModuleDto } from './dto/remove-module.dto';



@Controller('role-modules')
export class RoleModulesController {
  constructor(private readonly roleModulesService: RoleModulesService) {}

  @Post('assign')
  assignModules(@Body() dto: AssignModulesDto) {
    return this.roleModulesService.assignModules(dto);
  }

  @Get(':roleId')
  getRoleModules(@Param('roleId') roleId: string) {
    return this.roleModulesService.getRoleModules(Number(roleId));
  }

  @Delete('remove')
  removeModule(@Body() dto: RemoveModuleDto) {
    return this.roleModulesService.removeModule(dto);
  }
}
