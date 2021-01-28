import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RbacInterceptor } from 'src/interceptor/rbac.interceptor';
import { CommodityService } from './commodity.service';
import { roleConstants as role } from '../auth/constants';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('commodity')
@Controller('commodity')
export class CommodityController {
  constructor(private readonly commodityService: CommodityService) {}

  // 查询商品列表
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new RbacInterceptor(role.HUMAN)) // 调用 RBAC 拦截器
  @Post('list')
  async queryColumnList(@Body() body: any) {
    return await this.commodityService.queryCommodityList(body);
  }

  // 新建商品
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new RbacInterceptor(role.DEVELOPER))
  @Post('create')
  async createCommodity(@Body() body: any, @Request() req: any) {
    return await this.commodityService.createCommodity(body, req.user.username);
  }

  // 删除商品
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new RbacInterceptor(role.DEVELOPER))
  @Post('delete')
  async deleteCommodity(@Body() body: any) {
    return await this.commodityService.deleteCommodity(body);
  }
}
