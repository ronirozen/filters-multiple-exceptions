import { Request, Response } from "express";
import { Catch, Injectable, ArgumentsHost, ExceptionFilter } from "@nestjs/common";

import { A } from "../error";

@Injectable()
@Catch(A)
export class AExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(500).json({
      statusCode: 500,
      path: request.url,
      errorName: "AExceptionFilter",
      timestamp: new Date().toISOString()
    });
  }
}
