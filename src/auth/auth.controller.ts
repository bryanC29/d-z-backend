/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {
    return 'login';
  }

  @Post('register')
  register() {
    return 'register';
  }

  @Get('logout')
  logout() {
    return 'logout';
  }

  @Get('forgot-password')
  forgotPassword() {
    return 'forgot-password';
  }

  @Post('reset-password')
  resetPassword() {
    return 'reset-password';
  }
}
