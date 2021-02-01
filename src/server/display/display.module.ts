import { Module } from '@nestjs/common';
import { DisplayController } from './display.controller';
import { DisplayService } from './display.service';

@Module({
  providers: [DisplayService],
  controllers: [DisplayController],
})
export class DisplayModule {}
