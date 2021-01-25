import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';

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
  async register(@Body() body: any) {
    return await this.userService.register(
      body.username,
      body.password,
      body.email,
    );
  }

  @Post('login')
  async login(@Body() loginParmas: any) {
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
