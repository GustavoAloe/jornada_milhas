import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable() export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.tokenService.hasToken()) {
      const token = this.tokenService.returnToken();
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      })
    }

    return next.handle(req);
  }
}
