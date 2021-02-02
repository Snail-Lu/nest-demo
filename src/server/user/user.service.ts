import { Injectable } from '@nestjs/common';
import { apiBase, apiUrl } from '@api/index';
import axios from 'axios';

@Injectable()
export class UserService {
  /**
   * code登录
   */
  async login(code) {
    const url = apiBase + apiUrl.user.login;
    const res = await axios.post(url, {
      code,
    });
    return res;
  }

  /**
   * 更新用户信息
   * @param params
   */
  async updateUnionId(params) {
    const url = apiBase + apiUrl.user.updateUnionId;
    const res = await axios.post(url, params);
    return res;
  }

  /**
   * 更新用户手机号码
   * @param params
   */
  async updateMobile(params) {
    const url = apiBase + apiUrl.user.updateMobile;
    const res = await axios.post(url, params);
    return res;
  }
}
