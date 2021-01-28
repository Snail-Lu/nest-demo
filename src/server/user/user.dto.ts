import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Nest支持使用Interface（接口）来定义DTO，具体语法可以浏览TypeScript官方文档，不过Nest建议使用Class来做DTO
// 注册DTO
export class RegisterInfoDTO {
  @ApiProperty()
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须为字符串' })
  readonly username: string;
  @ApiProperty()
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
  @ApiProperty()
  @IsNotEmpty({ message: '邮箱不能为空' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  readonly email: string;
  @ApiPropertyOptional({
    description:
      '[用户角色]: 0-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户',
  })
  readonly role?: number;
}

export class LoginDTO {
  @ApiProperty()
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须为字符串' })
  readonly username: string;
  @ApiProperty()
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
}
