import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';

@ApiTags('cart')
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

  /**
   * 刷新购物车
   */
  @Post('refreshCart')
  refreshCart() {
    return this.cartService.refreshCart();
  }
}
