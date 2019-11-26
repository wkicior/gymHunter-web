import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {State} from "../reducers";
import {select, Store} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {selectAuthState} from "./auth.selectors";
import {switchMap, take} from "rxjs/operators";
import {GymHunterEndpointUrl} from "../app.config";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<State>, @Inject(GymHunterEndpointUrl) private endpointUrl: string) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(select(selectAuthState)).pipe(
      take(1),
      switchMap(authState => {
        if (!authState.isAuthenticated || !request.url.startsWith(this.endpointUrl)) {
          return next.handle(request);
        }
        request = request.clone({
          setHeaders: {
            Authorization: 'Basic ' + btoa(`${authState.username}:${authState.password}`)
          }
        });
        return next.handle(request);
      })
    );
  }
}
