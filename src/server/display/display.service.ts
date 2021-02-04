import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { apiBase, apiUrl } from '@api/index';

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
   * 获取站点面板数据
   */
  async getPanelInfo(params) {
    const url = apiBase + apiUrl.display.getPanelInfo;

    const res = await axios.post(url, params);
    return res;
  }

  async getCateInfo(params) {
    const url = apiBase + apiUrl.display.getCateInfo;

    const res = await axios.post(url, params);
    return res;
  }
}
