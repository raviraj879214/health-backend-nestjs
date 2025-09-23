// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    return this.prisma.user.create({
      data: { ...dto, password: hashedPassword },
    });
  }

  async getUsers() {
    return this.prisma.user.findMany({
      include: { role: { include: { modules: { include: { module: true } } } } },
    });
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { role: { include: { modules: { include: { module: true } } } } },
    });
  }

  async updateUser(id: number, dto: UpdateUserDto) {
    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10);
    }
    return this.prisma.user.update({
      where: { id },
      data: dto,
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
