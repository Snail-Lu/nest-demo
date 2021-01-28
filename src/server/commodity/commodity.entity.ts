import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Commodity {
  @ObjectIdColumn()
  id: ObjectID; //商品id

  @Column()
  commodity_name: string; // 商品名称

  @Column()
  commodity_desc: string; // 商品介绍

  @Column()
  market_price: string; // 市场价

  @Column()
  sale_price: string; // 销售价

  @Column()
  c_by: string; // 创建人

  @Column()
  c_time: number; // 创建时间

  @Column()
  u_by: string; // 修改人

  @Column()
  u_time: number; // 修改时间
}
