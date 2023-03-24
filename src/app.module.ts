import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";

import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { ConvertErrorByNameInterceptor } from "./common/interceptor";
import { BExceptionFilter, AExceptionFilter } from "./common/exception-filter";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: BExceptionFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ConvertErrorByNameInterceptor
    }
  ]
})
export class AppModule {}
