import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from 'auth/infrastructure/passport/local.strategy';
import { AuthService } from 'auth/application/services/auth.service';
import { UserModule } from 'user/user.module';
import { AuthController } from 'auth/infrastructure/http/controllers/auth.controller';
import authConfig from 'config/auth';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: authConfig.jwtSecret,
      signOptions: {
        expiresIn: '15 days',
      },
    }),
    UserModule,
  ],
  providers: [
    AuthService,
    LocalStrategy,
  ],
  exports: [
    AuthService,
  ],
  controllers: [
    AuthController,
  ]
})
export class AuthModule { }
