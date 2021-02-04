import { Module } from '@nestjs/common';
import { UserModule } from './server/user/user.module';
import { DisplayModule } from './server/display/display.module';
import { CartModule } from './server/cart/cart.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './server/product/product.module';

@Module({
  imports: [UserModule, DisplayModule, CartModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
