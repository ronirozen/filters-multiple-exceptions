import { Request, Response } from "express";
import { Catch, Injectable, ArgumentsHost, ExceptionFilter } from "@nestjs/common";

import { Roni } from "../error";

@Injectable()
@Catch(Roni)
export class RoniExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(500).json({
      statusCode: 500,
      path: request.url,
      errorName: "RoniExceptionFilter",
      timestamp: new Date().toISOString()
    });
  }
}
