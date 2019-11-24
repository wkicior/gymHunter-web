import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {State} from "../../reducers";
import {Store} from "@ngrx/store";
import {GetTraining} from "../../training/trainings.actions";
import {selectSelectedTraining} from "../../training/trainings.selectors";

@Component({
  selector: 'app-new-subscription',
  templateUrl: './new-subscription.component.html',
  styleUrls: ['./new-subscription.component.scss']
})
export class NewSubscriptionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  training$ = this.store.select(selectSelectedTraining);

  ngOnInit() {
    this.store.dispatch(new GetTraining(this.route.snapshot.params.trainingId))
  }

}
