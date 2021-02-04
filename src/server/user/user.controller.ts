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
  async login(@Body() loginParmas: LoginDTO) {
    const { code } = loginParmas;
    return this.userService.login(code);
  }

  /**
   * 更新用户信息
   * @param params
   */
  @Post('updateUnionId')
  async updateUnionId(@Body() params: UpdateUnionidDTO) {
    return this.userService.updateUnionId(params);
  }

  /**
   * 更新用户手机号码
   * @param params
   */
  @Post('updateMobile')
  async updateMobile(@Body() params) {
    return this.userService.updateMobile(params);
  }
}
