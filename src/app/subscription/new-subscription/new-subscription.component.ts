import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {State} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {GetTraining} from "../../training/trainings.actions";
import {selectSelectedTraining} from "../../training/trainings.selectors";
import {Subscribe} from "../subscriptions.actions";
import {DateService} from "../../time/date.service";
import {ITraining} from "../../training/training";
import {createdSubscription} from "../subscriptions.selectors";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-new-subscription',
  templateUrl: './new-subscription.component.html',
  styleUrls: ['./new-subscription.component.scss']
})
export class NewSubscriptionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store<State>, private dateService: DateService, private router: Router) { }

  training$ = this.store.select(selectSelectedTraining);
  successfulySubscribed$ = this.store.pipe(select(createdSubscription)).pipe(
    filter(s => s !== null)
  );
  autoDeadlineBeforeHours: Number;

  ngOnInit() {
    this.store.dispatch(new GetTraining(this.route.snapshot.params.trainingId))
    this.successfulySubscribed$.subscribe(() => this.router.navigate(['/subscriptions']));
  }

  subscribe(training: ITraining) {
    const abdl = this.autoDeadlineBeforeHours ? this.dateService.getHoursBeforeDate(training.start_date, this.autoDeadlineBeforeHours) : null;
    this.store.dispatch(new Subscribe(abdl))
  }
}
