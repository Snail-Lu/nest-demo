import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './server/user/user.module';
import { AuthModule } from './server/auth/auth.module';
import { UserController } from './server/user/user.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
