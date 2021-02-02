import { Body, Controller, Post, Get, Put, Delete, Head } from '@nestjs/common';
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
  getConfigByKey(@Body() body: any) {
    return this.displayService.getConfigByKey(body);
  }

  /**
   * 获取默认门店
   * @param headers
   */
  @Get('getDefaultShop')
  getDefaultShop() {
    return this.displayService.getDefaultShop();
  }

  /**
   * 获取平均满意度以及总评论数
   * @param body
   * @param headers
   */
  @Put('getCountNumAndAvgGrade')
  getCountNumAndAvgGrade(@Body() body: any) {
    return this.displayService.getCountNumAndAvgGrade(body);
  }

  /**
   * 获取助力好友列表
   * @param headers
   */
  @Delete('getAssistanceUser')
  getAssistanceUser() {
    return this.displayService.getAssistanceUser();
  }

  /**
   * 获取商品列表
   * @param body
   * @param headers
   */
  @Head('getProductList')
  getProductList() {
    return this.displayService.getProductList();
  }
}
