import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { makeSalt, encrypt } from '../../utils/cryptogram'; // 引入加密函数

@Injectable()
export class UserService {
  constructor(
    // 注入userRepository存储库，后文中就可以使用Repository API进行数据库操作
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * 用户注册
   * @param username
   * @param password
   * @param email
   */
  async register(username: string, password: string, email: string) {
    // 用户名校验
    const sameUser = await this.findOne({ username });
    if (sameUser) {
      return {
        code: 400,
        msg: '用户已存在',
      };
    }

    // 邮箱校验
    const sameEmail = await this.findOne({ email });
    if (sameEmail) {
      return {
        code: 400,
        msg: '该邮箱已注册',
      };
    }

    try {
      const salt = makeSalt();
      const hashPwd = encrypt(password, salt);
      await this.userRepository.save({
        username,
        password: hashPwd,
        email,
        pwd_salt: salt,
      });

      return {
        code: 200,
        msg: '新增成功',
      };
    } catch (e) {
      return {
        code: 503,
        msg: `Service error: ${e}`,
      };
    }
  }

  /**
   * 查找用户
   * @param username
   */
  async findOne(params: any): Promise<any | undefined> {
    try {
      const user = await this.userRepository.findOne(params);
      return user;
    } catch (e) {
      return void 0;
    }
  }

  /**
   * 查看全部用户数据
   */
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
