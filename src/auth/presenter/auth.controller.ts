import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../domain/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() payload: any) {
    return this.authService.validateTelegramLogin(payload);
  }
}
