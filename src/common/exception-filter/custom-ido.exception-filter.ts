import { Request, Response } from "express";
import { Catch, Injectable, ArgumentsHost, ExceptionFilter } from "@nestjs/common";

import { Ido } from "../error";

@Injectable()
@Catch(Ido)
export class IdoExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(500).json({
      statusCode: 500,
      path: request.url,
      errorName: "IdoExceptionFilter",
      timestamp: new Date().toISOString()
    });
  }
}
