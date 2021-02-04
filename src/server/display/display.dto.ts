import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * 面板接口DTO
 */
export class panelDTO {
  @ApiProperty()
  @IsNotEmpty({ message: '站点标识不能为空' })
  readonly siteMark: string;
}

/**
 * 分类接口DTO
 */
export class cateDTO {
  @ApiProperty()
  readonly fid: number;
}
