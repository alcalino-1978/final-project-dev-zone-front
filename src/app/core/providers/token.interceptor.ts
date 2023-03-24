import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: string = localStorage.getItem('token') as string || '';
    // console.log('token: ', token)
    // const token: string = environment.USER_API_KEY as string;
    let request = req;
    if (token || token === "") {
      request = req.clone({
        setHeaders: {
          'X-Api-Key': environment.CATS_API_KEY as string,
          authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Headers': 'Accept',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        },
      });
    }
    return next.handle(request);
  }
}
