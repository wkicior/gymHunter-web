import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ITrainingHuntingSubscription} from "./training-hunting-subscription";
import {GymHunterEndpointUrl} from "../app.config";
import {SubscriptionRequest} from "./subscription-request";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private http: HttpClient, @Inject(GymHunterEndpointUrl) private endpointUrl: string) { }

  getAllSubscriptions(): Observable<ITrainingHuntingSubscription[]> {
    return this.http.get<ITrainingHuntingSubscription[]>(`${this.endpointUrl}/training-hunting-subscriptions`);
  }

  subscribe(request: SubscriptionRequest): Observable<ITrainingHuntingSubscription> {
    console.log("posing" + JSON.stringify(request));
    return this.http.post<ITrainingHuntingSubscription>(`${this.endpointUrl}/training-hunting-subscriptions`, request);
  }
}

