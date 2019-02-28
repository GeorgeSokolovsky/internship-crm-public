import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenExpiredInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: any, httpEvent: Observable<HttpEvent<any>>) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this.authService.logOut();
        }

        return httpEvent;
      }),
    );
  }
}
