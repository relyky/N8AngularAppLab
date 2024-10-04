import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const csrfToken = localStorage.getItem('X-CSRF-TOKEN');
    if (csrfToken) {
      const cloned = req.clone({
        headers: req.headers.set('X-CSRF-TOKEN', csrfToken)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
