import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'auth/application/services/auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) { }

  @Get('login')
  @UseGuards(AuthGuard('local'))
  login(@Request() request) {
    return this.authService.login(request.user);
  }

}
