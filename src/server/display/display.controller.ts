import { Body, Controller, Post, Get, Put, Delete, Head } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { cateDTO, panelDTO } from './display.dto';
import { DisplayService } from './display.service';

@ApiTags('display')
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
   * 获取站点面板数据
   * @param params
   */
  @Post('getResultBySiteMark')
  getPanelInfo(@Body() params: panelDTO) {
    return this.displayService.getPanelInfo(params);
  }

  /**
   * 获取分类数据
   */
  @Post('getThemeCodeFloorByThemeCode')
  getCateInfo(@Body() params: cateDTO) {
    return this.displayService.getCateInfo(params);
  }
}
