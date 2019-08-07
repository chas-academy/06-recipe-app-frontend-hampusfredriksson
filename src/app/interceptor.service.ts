import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const Token = TokenService;

    if (Token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + Token)
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
