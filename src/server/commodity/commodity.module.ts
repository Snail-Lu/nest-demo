import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommodityController } from './commodity.controller';
import { CommodityService } from './commodity.service';
import { Commodity } from './commodity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Commodity])],
  providers: [CommodityService],
  controllers: [CommodityController],
})
export class CommodityModule {}
