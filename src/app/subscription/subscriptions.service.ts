import {Inject, Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {ITrainingHuntingSubscription} from "./training-hunting-subscription";
import {State} from "../reducers";
import {Store} from "@ngrx/store";
import {GymHunterEndpointUrl} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private http: HttpClient, @Inject(GymHunterEndpointUrl) private endpointUrl: string) { }

  getAllSubscriptions(): Observable<ITrainingHuntingSubscription[]> {
    return this.http.get<ITrainingHuntingSubscription[]>(`${this.endpointUrl}/training-hunting-subscriptions`);
  }
}

