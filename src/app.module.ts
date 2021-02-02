import { Module } from '@nestjs/common';
import { UserModule } from './server/user/user.module';
import { DisplayModule } from './server/display/display.module';
import { CartModule } from './server/cart/cart.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UserModule, DisplayModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
