import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { apiBase, apiUrl } from '@api/index';

@Injectable()
export class CartService {
  /**
   * 获取购物车数量
   * @param params
   */
  async getCartGoodsNum() {
    const url = apiBase + apiUrl.cart.getCartNum;
    const res = await axios.post(url, {});
    return res;
  }

  /**
   * 刷新购物车
   * @param params
   */
  async refreshCart() {
    const url = apiBase + apiUrl.cart.refresh;
    const res = await axios.post(url, {});
    return res;
  }
}
