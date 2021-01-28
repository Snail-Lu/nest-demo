import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { encrypt } from '../../utils/cryptogram';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // 校验用户信息
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ username });
    if (user) {
      const userHashPwd = user.password;
      const salt = user.pwd_salt;

      // 将传参password加密与数据库密码对比
      const hashPwd = encrypt(password, salt);
      if (hashPwd === userHashPwd) {
        return {
          code: 1,
          user,
        };
      } else {
        return {
          code: 2,
          user: null,
        };
      }
    }
    return {
      code: 3,
      user: null,
    };
  }

  // 处理jwt签证
  async certificate(user: any) {
    const payload = {
      username: user.username,
      email: user.email,
      role: user.role,
    };

    try {
      const token = this.jwtService.sign(payload);
      return {
        code: 200,
        data: {
          token,
        },
        msg: '登录成功',
      };
    } catch (error) {
      return {
        code: 600,
        msg: '账号或密码错误',
      };
    }
  }
}
