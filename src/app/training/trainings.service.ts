import { Injectable } from '@angular/core';
import {ITraining, ITrainingResponse} from "./training";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http: HttpClient) { }

  getTrainings(clubId: number, start: string, end: string): Observable<ITraining[]> {
    return this.http.get<ITrainingResponse>(` https://api.gymsteer.com/api/clubs/${clubId}/trainings?start=${start}&end=${end}`).pipe(
      map(tr => tr.trainings)
    );
  }
}
