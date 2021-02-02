import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { apiBase, apiUrl } from '@api/index';

@Injectable()
export class CartService {
  /**
   * 获取购物车数量
   * @param params
   */
  async getCartGoodsNum(params) {
    const url = apiBase + apiUrl.cart.getCartNum;
    const res = await axios.post(url, params);
    return res;
  }
}
