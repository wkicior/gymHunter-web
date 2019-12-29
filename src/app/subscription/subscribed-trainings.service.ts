import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../reducers";
import {ISubscribedTraining} from "./subscribed-training";
import {Observable, zip} from "rxjs";
import {selectAllSubscriptions} from "./subscriptions.selectors";
import {selectSubscribedTrainings} from "../training/trainings.selectors";
import {ITraining} from "../training/training";
import {ITrainingHuntingSubscription} from "./training-hunting-subscription";
import {map} from "rxjs/operators";
import {GetTrainingsForSubscriptions} from "../training/trainings.actions";
import {GetAllSubscriptions} from "./subscriptions.actions";

@Injectable({
  providedIn: 'root'
})
export class SubscribedTrainingsService {

  constructor(private store: Store<State>) {
    this.subscriptions$.subscribe(() => this.store.dispatch(new GetTrainingsForSubscriptions()));
  }

  subscriptions$: Observable<ITrainingHuntingSubscription[]> = this.store.select(selectAllSubscriptions);
  trainings$: Observable<ITraining[]> = this.store.select(selectSubscribedTrainings);


  selectSubscribedTrainings(): Observable<ISubscribedTraining[]> {
    this.store.dispatch(new GetAllSubscriptions());

    return zip(this.trainings$, this.subscriptions$, (trainings, subscriptions) => ({trainings, subscriptions})).pipe(
      map(({subscriptions, trainings}) => {
        return subscriptions.map(s => {
          return  {training: trainings.find(t => t.id === s.externalSystemId), trainingHuntingSubscription: s};
        })
    })
    );
  }
}
