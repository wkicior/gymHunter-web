import { Injectable } from '@angular/core';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDateWithDaysOffset(dayOffset: number): string {
    return moment().add(dayOffset, 'days').format("YYYY-MM-DD");
  }

  getDateWithDaysOffsetDisplay(dayOffset: number): string {
    return moment().add(dayOffset, 'days').format("dddd Do MMM YYYY");
  }
}
