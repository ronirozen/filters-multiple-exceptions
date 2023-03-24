import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { NestInterceptor, ExecutionContext, Injectable, CallHandler } from "@nestjs/common";

import * as errors from "../error";

export class EntityNotFoundError extends Error {}

@Injectable()
export class ConvertErrorByNameInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        throw new (errors[error.message] ? errors[error.message] : Error)("Just something");
      })
    );
  }
}
