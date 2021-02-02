import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { apiBase, apiUrl } from './../../api/index';

@Injectable()
export class DisplayService {
  /**
   * 根据关键字获取对应的配置值
   * @param body
   * @param headers
   */
  async getConfigByKey(body) {
    const { configKey } = body;
    const url = apiBase + apiUrl.display.getConfigByKey;

    const res = await axios.post(url, {
      configKey,
    });
    return res;
  }

  /**
   * 获取默认门店
   * @param headers
   */
  async getDefaultShop() {
    const url = apiBase + apiUrl.display.getDefaultShop;
    const res = await axios.get(url);
    return res;
  }

  /**
   * 获取平均满意度以及总评论数
   * @param body
   * @param headers
   */
  async getCountNumAndAvgGrade(body) {
    const { goodsn } = body;
    const url = apiBase + apiUrl.display.getCountNumAndAvgGrade;

    const res = await axios.put(url, { goodsn });
    return res;
  }

  /**
   * 获取助力好友列表
   * @param headers
   */
  async getAssistanceUser() {
    const url = apiBase + apiUrl.display.getAssistanceUser;

    const res = await axios.delete(url);
    return res;
  }

  /**
   * 获取商品列表
   */
  async getProductList() {
    // const { pageNo, pageSize, sort } = body;
    const url = apiBase + apiUrl.display.getProductList;

    const res = await axios.head(url);
    return res;
  }
}
