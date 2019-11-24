import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {selectTrainings} from "../trainings.selectors";
import {GetTrainings} from "../trainings.actions";
import {DateService} from "../../time/date.service";
import {map} from "rxjs/operators";
import {Training} from "../training";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss']
})
export class TrainingListComponent implements OnInit {
  private dayOffset$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private store: Store<State>, private dateService: DateService) { }

  trainings$ = this.store.select(selectTrainings).pipe(
    map(t => t.slice().sort(Training.orderByStartDate()))
  );

  currentDate$ = this.dayOffset$.pipe(
    map(o => this.dateService.getDateWithDaysOffsetDisplay(o))
  );

  ngOnInit() {
    this.dayOffset$.subscribe(dayShift => {
      let startDateStr = this.dateService.getDateWithDaysOffset(dayShift);
      let endDateStr = this.dateService.getDateWithDaysOffset(dayShift + 2);
      this.store.dispatch(new GetTrainings(startDateStr, endDateStr));
    });
  }

  shiftDayOffset(dayShift: number) {
    this.dayOffset$.next(this.dayOffset$.value + dayShift);
  }

}
