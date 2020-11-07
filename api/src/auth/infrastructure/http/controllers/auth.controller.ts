import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'auth/application/services/auth.service';
import { LocalAuthGuard } from 'auth/infrastructure/guards/local-auth.guard';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() request) {
    return this.authService.login(request.user);
  }

}
