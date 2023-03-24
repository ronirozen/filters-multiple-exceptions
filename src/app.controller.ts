import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getDate(): string {
    return "Hi, it's works";
  }

  @Get("/error")
  throwError(): string {
    throw new Error();
  }

  @Get("/a")
  throwA(): string {
    throw new Error("A");
  }

  @Get("/b")
  throwB(): string {
    throw new Error("B");
  }
}
