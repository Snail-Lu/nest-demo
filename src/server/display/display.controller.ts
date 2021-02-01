import {
  Body,
  Controller,
  Post,
  Headers,
  Get,
  Put,
  Delete,
  Head,
} from '@nestjs/common';
import { DisplayService } from './display.service';

@Controller('display')
export class DisplayController {
  constructor(private readonly displayService: DisplayService) {}

  /**
   * 获取配置值
   * @param body
   * @param headers
   */
  @Post('getConfigByKey')
  getConfigByKey(@Body() body: any, @Headers() headers: any) {
    return this.displayService.getConfigByKey(body, headers);
  }

  /**
   * 获取默认门店
   * @param headers
   */
  @Get('getDefaultShop')
  getDefaultShop(@Headers() headers: any) {
    return this.displayService.getDefaultShop(headers);
  }

  /**
   * 获取平均满意度以及总评论数
   * @param body
   * @param headers
   */
  @Put('getCountNumAndAvgGrade')
  getCountNumAndAvgGrade(@Body() body: any, @Headers() headers: any) {
    return this.displayService.getCountNumAndAvgGrade(body, headers);
  }

  /**
   * 获取助力好友列表
   * @param headers
   */
  @Delete('getAssistanceUser')
  getAssistanceUser(@Headers() headers: any) {
    return this.displayService.getAssistanceUser(headers);
  }

  /**
   * 获取商品列表
   * @param body
   * @param headers
   */
  @Head('getProductList')
  getProductList(@Body() body: any, @Headers() headers: any) {
    return this.displayService.getProductList(body, headers);
  }
}
