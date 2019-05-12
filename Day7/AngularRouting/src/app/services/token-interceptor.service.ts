import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private _aService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes("8000")) {
            let request = req.clone({
                setHeaders: {
                    'x-access-token': `${this._aService.getToken()}`
                }
            });

            return next.handle(request).pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        console.log("Success - ", event.status);
                    }
                }, error => {
                    console.log("Status Code - ", error.status);
                })
            );
        }
        else
            return next.handle(req);
    }

}