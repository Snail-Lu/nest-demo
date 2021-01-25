import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';
import * as express from 'express';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { AllExceptionFilter } from './filter/any-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // for parsing application/json
  app.use(express.json());
  // form parsing application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  // 这里必须使用函数中间件
  app.use(logger);
  // 使用全局拦截器打印出参
  app.useGlobalInterceptors(new TransformInterceptor());
  // 使用过滤器捕获全部异常
  app.useGlobalFilters(new AllExceptionFilter());
  //  使用过滤器捕获http异常，要放在AllExptionFilter下面，否则异常都被AllExptionFilter捕获了，HttpExceptionFilter就不起作用了
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
