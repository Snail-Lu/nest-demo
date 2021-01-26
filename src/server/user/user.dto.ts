import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Nest支持使用Interface（接口）来定义DTO，具体语法可以浏览TypeScript官方文档，不过Nest建议使用Class来做DTO
export class RegisterInfoDTO {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须为字符串' })
  readonly username: string;
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
  @IsNotEmpty({ message: '邮箱不能为空' })
  @IsEmail({}, { message: '邮箱格式不正确' })
  readonly email: string;
}
