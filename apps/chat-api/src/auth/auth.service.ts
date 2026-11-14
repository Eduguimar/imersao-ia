import { Injectable } from '@nestjs/common';
import type { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  login(_input: LoginDto): never {
    throw new Error('Login ainda não implementado');
  }
}
