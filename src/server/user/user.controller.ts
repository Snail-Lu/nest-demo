import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';
import { ValidationPipe } from '../../pipe/validation.pipe';
import { RegisterInfoDTO, LoginDTO } from './user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth() // Swagger的jwt验证
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('list')
  findAll() {
    return this.userService.findAll();
  }

  /**
   * 注册
   * @param body
   */
  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() body: RegisterInfoDTO) {
    return await this.userService.register(
      body.username,
      body.password,
      body.email,
    );
  }

  @Post('login')
  async login(@Body() loginParmas: LoginDTO) {
    const authResult = await this.authService.validateUser(
      loginParmas.username,
      loginParmas.password,
    );
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: 600,
          msg: `账号或密码不正确`,
        };
      default:
        return {
          code: 600,
          msg: `查无此人`,
        };
    }
  }

  @Post('find-one')
  findOne(@Body() body: any) {
    return this.userService.findOne(body.username);
  }
}
