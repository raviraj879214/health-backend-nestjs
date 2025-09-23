// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      include: { role: { include: { modules: { include: { module: true } } } } },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const passwordValid = await bcrypt.compare(dto.password, user.password);
    if (!passwordValid) throw new UnauthorizedException('Invalid credentials');

    // Prepare payload with user id and role
    const payload = { sub: user.id, roleId: user.roleId };

    // Sign JWT using .env variables directly
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET || 'defaultSecretKey',
      expiresIn: process.env.JWT_EXPIRES_IN || '3600s',
    });

    return { access_token: token, user };
  }
}
