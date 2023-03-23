import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";

import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { ConvertErrorByNameInterceptor } from "./common/interceptor";
import { IdoExceptionFilter, RoniExceptionFilter } from "./common/exception-filter";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: RoniExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: IdoExceptionFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ConvertErrorByNameInterceptor
    }
  ]
})
export class AppModule {}
