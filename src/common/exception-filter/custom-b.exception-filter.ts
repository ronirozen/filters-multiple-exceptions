import { Request, Response } from "express";
import { Catch, Injectable, ArgumentsHost, ExceptionFilter } from "@nestjs/common";

import { B } from "../error";

@Injectable()
@Catch(B)
export class BExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(500).json({
      statusCode: 500,
      path: request.url,
      errorName: "BExceptionFilter",
      timestamp: new Date().toISOString()
    });
  }
}
