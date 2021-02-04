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

  /**
   * 获取用户会员信息
   */
  async getUserCardInfo() {
    const url = apiBase + apiUrl.user.getUserCardInfo;
    const res = await axios.post(url, {});
    return res;
  }

  /**
   * 获取用户储值卡信息
   */
  async getStoreCardInfo() {
    const url = apiBase + apiUrl.user.getStoreCardInfo;
    const res = await axios.post(url, {});
    return res;
  }

  /**
   * 获取员工内购码
   */
  async getStaffActiveCode(params?: Record<string, unknown>) {
    const url = apiBase + apiUrl.user.getStaffCode;
    const res = await axios.post(url, params);
    return res;
  }
}
