import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';
import { ValidationPipe } from '../../pipe/validation.pipe';
import { RegisterInfoDTO, LoginDTO, UpdateUnionidDTO } from './user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

// @ApiBearerAuth() // Swagger的jwt验证
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * 微信code登录
   * @param loginParmas
   */
  @Post('login')
  login(@Body() loginParmas: LoginDTO) {
    const { code } = loginParmas;
    return this.userService.login(code);
  }

  /**
   * 更新用户信息
   * @param params
   */
  @Post('updateUnionId')
  updateUnionId(@Body() params: UpdateUnionidDTO) {
    return this.userService.updateUnionId(params);
  }

  /**
   * 更新用户手机号码
   * @param params
   */
  @Post('updateMobile')
  updateMobile(@Body() params) {
    return this.userService.updateMobile(params);
  }

  /**
   * 获取用户会员信息
   */
  @Post('getUserCardInfo')
  getUserCardInfo() {
    return this.userService.getUserCardInfo();
  }

  /**
   * 获取用户储值卡信息
   */
  @Post('getStoreCardInfo')
  getStoreCardInfo() {
    return this.userService.getStoreCardInfo();
  }

  /**
   * 获取员工内内购码
   */
  @Post('getStaffActiveCode')
  getStaffActiveCode() {
    return this.userService.getStaffActiveCode();
  }
}
