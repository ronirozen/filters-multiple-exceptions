import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/roni")
  throwRoni(): string {
    throw new Error("Roni");
  }

  @Get("/ido")
  throwIdo(): string {
    throw new Error("Ido");
  }
}
