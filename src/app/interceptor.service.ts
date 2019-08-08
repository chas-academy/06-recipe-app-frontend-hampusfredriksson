import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      })
    );
  }
}
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {

//     const token = TokenService.getToken();

//     if (token) {
//       req = req.clone({
//         headers: req.headers.set('Authorization', 'Bearer ' + token)
//       });
//     }

//     if (!req.headers.has('Content-Type')) {
//       req = req.clone({
//         headers: req.headers.set('Content-Type', 'application/json')
//       });
//     }

//     req = req.clone({
//       headers: req.headers.set('Accept', 'application/json')
//     });

//     return next.handle(req).pipe(
//       map((event: HttpEvent<any>) => {
//         if (event instanceof HttpResponse) {
//           console.log('event--->>>', event);
//         }
//         return event;
//       })
//     );
//   }
// }
