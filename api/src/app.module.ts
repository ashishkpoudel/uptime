import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'auth/auth.module';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { UserModule } from 'user/user.module';
import dbConfig from 'config/database';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: dbConfig.host,
      port: dbConfig.port,
      database: dbConfig.database,
      password: dbConfig.password,
      username: dbConfig.username,
      synchronize: dbConfig.synchronize,
      entities: [],
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
