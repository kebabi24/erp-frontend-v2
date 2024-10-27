// Angular
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
/**
 * More information there => https://medium.com/@MetonymyQT/angular-http-interceptors-what-are-they-and-how-to-use-them-52e060321088
 */
@Injectable()
export class InterceptService implements HttpInterceptor {
  // intercept request and add token
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:no-debugger
    // modify request
    //@ts-ignore
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    request = request.clone({
      setHeaders: {
        USER_CODE: user?.usrd_code || '0001', // Safeguard with default
        USER_DOMAIN: user?.usrd_domain || 'acsiome', // Safeguard with default
      },
    });

    // console.log('----request----');
    // console.log(request);
    // console.log('--- end of request---');

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            //       console.log('all looks good');
            // http response status code
            // console.log(event.status);
          }
        },
        (error) => {
          // http response status code
          // console.log('----response----');
          // console.error('status code:');
          // tslint:disable-next-line:no-debugger
          // console.error(error.status);
          // console.error(error.message);
          // console.log('--- end of response---');
        }
      )
    );
  }
}
