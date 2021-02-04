import { Body, Controller, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /**
   * 获取购物车数量
   */
  @Post('getCartGoodsNum')
  getCartGoodsNum() {
    return this.cartService.getCartGoodsNum();
  }
}
