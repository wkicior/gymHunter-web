import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {ITrainingHuntingSubscription} from "./training-hunting-subscription";
import {State} from "../reducers";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private http: HttpClient) { }

  getAllSubscriptions(): Observable<ITrainingHuntingSubscription[]> {
    return this.http.get<ITrainingHuntingSubscription[]>("http://localhost:8080/api/training-hunting-subscriptions");
  }
}
