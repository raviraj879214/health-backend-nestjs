// src/role-modules/role-modules.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AssignModulesDto } from './dto/assign-modules.dto';
import { RemoveModuleDto } from './dto/remove-module.dto';


@Injectable()
export class RoleModulesService {
  constructor(private prisma: PrismaService) {}

  async assignModules(dto: AssignModulesDto) {
    const { roleId, moduleIds } = dto;
    await this.prisma.roleModule.deleteMany({ where: { roleId } });
    const data = moduleIds.map((moduleId) => ({ roleId, moduleId }));
    return this.prisma.roleModule.createMany({ data });
  }

  async getRoleModules(roleId: number) {
    const roleModules = await this.prisma.roleModule.findMany({
      where: { roleId },
      include: { module: true },
    });
    return roleModules.map((rm) => rm.module);
  }

  async removeModule(dto: RemoveModuleDto) {
    const { roleId, moduleId } = dto;
    return this.prisma.roleModule.delete({
      where: { roleId_moduleId: { roleId, moduleId } },
    });
  }
}
