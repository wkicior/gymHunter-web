import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {State} from "../reducers";
import {select, Store} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {selectAuthState} from "./auth.selectors";
import {switchMap} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<State>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("**************************");
    return this.store.pipe(select(selectAuthState)).pipe(
      switchMap(authState => {
        if (!authState.isAuthenticated) {
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
