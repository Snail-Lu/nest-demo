import { Injectable } from '@nestjs/common';
import { apiBase, apiUrl } from '@src/api';
import axios from 'axios';

@Injectable()
export class ProductService {
  /**
   * 获取商品列表
   * @param params
   */
  async getProductList(params) {
    const url = apiBase + apiUrl.display.getProductList;
    const res = await axios.post(url, params);
    return res;
  }
}
