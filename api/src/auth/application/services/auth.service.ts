import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
  ) { }

  public async validate(username: string, password: string): Promise<any> {
    if (username === 'admin@local.com' && password === 'secret') {
      return {
        id: 'id_12345',
        username,
        password,
      };
    }

    return null;
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
    };
  }

}
