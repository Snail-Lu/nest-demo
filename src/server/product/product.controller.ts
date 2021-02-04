import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GoodsListDTO } from './product.dto';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * 获取商品列表
   * @param params
   */
  @Post('getProductList')
  getProductList(@Body() params: GoodsListDTO) {
    return this.productService.getProductList(params);
  }
}
