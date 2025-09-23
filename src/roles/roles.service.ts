import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';



@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}



async createRole(dto: CreateRoleDto) {
  // Check if role already exists
  const existingRole = await this.prisma.role.findUnique({
    where: { name: dto.name },
  });

  if (existingRole) {
    return {
      status: 400, // 400 is better than 404 here
      message: 'Role already exists',
    };
  }

  // Create new role
  const role = await this.prisma.role.create({
    data: { name: dto.name },
  });

  return {
    status: 200,
    message: 'Role created successfully',
    data: role,
  };
}




  


  getRoles() {
    return this.prisma.role.findMany();
  }

  getRoleById(id: number) {
    return this.prisma.role.findUnique({ where: { id } });
  }

  updateRole(id: number, dto: UpdateRoleDto) {
    return this.prisma.role.update({ where: { id }, data: { name: dto.name } });
  }

  deleteRole(id: number) {
    return this.prisma.role.delete({ where: { id } });
  }
}
