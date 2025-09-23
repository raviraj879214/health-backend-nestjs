// src/test/test.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { TestController } from './test.controller';
import { RolesGuard } from 'src/common/guards/roles.guards';



@Module({
  controllers: [TestController],
  providers: [PrismaService, RolesGuard, JwtService],
})
export class TestModule {}
