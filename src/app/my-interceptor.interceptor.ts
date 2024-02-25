import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor(private authSrvc: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authSrvc.fnGetAccTkn();
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          token: accessToken
        }
      });
    }
    return next.handle(request);
  }
}
