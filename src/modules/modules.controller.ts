// src/modules/modules.controller.ts
import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';


@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post()
  create(@Body() dto: CreateModuleDto) {
    return this.modulesService.createModule(dto);
  }

  @Get()
  findAll() {
    return this.modulesService.getModules();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulesService.getModuleById(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateModuleDto) {
    return this.modulesService.updateModule(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulesService.deleteModule(Number(id));
  }
}
