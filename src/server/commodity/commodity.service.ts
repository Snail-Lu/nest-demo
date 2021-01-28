import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Commodity } from './commodity.entity';

@Injectable()
export class CommodityService {
  constructor(
    // 注入commodityRepository存储库，类型为mongo库，后文中就可以使用Mongo Repository API进行数据库操作
    @InjectRepository(Commodity)
    private readonly commodityRepository: MongoRepository<Commodity>,
  ) {}
  /**
   * 查询商品列表
   * @param {*} body
   * @param {string} username
   * @returns {Promise<any>}
   * @memberof CommodityService
   */
  async queryCommodityList(body: any): Promise<any> {
    const { pageIndex = 1, pageSize = 10 } = body;
    // 分页查询条件
    // const currentIndex =
    //   (pageIndex - 1) * pageSize < 0 ? 0 : (pageIndex - 1) * pageSize;

    const commodityList = await this.commodityRepository.find({
      skip: pageIndex,
      take: pageSize,
    });

    // 统计数据条数
    const count = await this.commodityRepository.count();
    return {
      code: 200,
      data: {
        commodityList,
        total: count,
      },
    };
  }

  /**
   * 创建商品
   *
   * @param {*} body
   * @param {string} username
   * @returns {Promise<any>}
   * @memberof CommodityService
   */
  async createCommodity(body: any, username: string): Promise<any> {
    const { id, name, description, salePrice, marketPrice } = body;
    await this.commodityRepository.save({
      id,
      commodity_name: name,
      commodity_desc: description,
      sale_price: salePrice,
      market_price: marketPrice,
      c_by: username,
      c_time: new Date().getTime(),
    });
    return {
      code: 200,
      msg: 'Success',
    };
  }

  /**
   * 删除商品
   *
   * @param {*} body
   * @returns {Promise<any>}
   * @memberof CommodityService
   */
  async deleteCommodity(body: any): Promise<any> {
    const { id } = body;
    try {
      await this.commodityRepository.deleteMany({ id });

      return {
        code: 200,
        msg: 'Success',
      };
    } catch (e) {
      return {
        code: 500,
        msg: e.message,
      };
    }
  }
}
