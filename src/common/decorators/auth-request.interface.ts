// src/common/types/auth-request.interface.ts
import { Request } from 'express';

export interface AuthRequest extends Request {
  user?: {
    sub: number;
    roleId: number;
    // add any other fields you store in the JWT payload
  };
}
