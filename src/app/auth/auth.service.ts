import {Inject, Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {GymHunterEndpointUrl} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, @Inject(GymHunterEndpointUrl) private endpointUrl: string) { }

  login(username: string, password: string): Observable<boolean> {
    let httpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });
    return this.http.get(`${this.endpointUrl}/training-hunting-subscriptions`,
      { observe: 'response', headers: httpHeaders }).pipe(
      map(response => response.status === 200),
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return of(false);
        }
        return throwError(error);
       })
    );
  }
}
