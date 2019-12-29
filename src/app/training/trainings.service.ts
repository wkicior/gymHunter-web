import { Injectable } from '@angular/core';
import {ITraining, ITrainingResponse, ITrainingsResponse} from "./training";
import {forkJoin, from, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {concatMap, map, mergeMap, tap, toArray} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http: HttpClient) { }

  getTrainings(clubId: number, start: string, end: string): Observable<ITraining[]> {
    return this.http.get<ITrainingsResponse>(`https://api.gymsteer.com/api/clubs/${clubId}/trainings?start=${start}&end=${end}`).pipe(
      map(tr => tr.trainings)
    );
  }

  getTrainingsByIds(clubId: number, ids: number[]): Observable<ITraining[]> {
    return from(ids).pipe(
      mergeMap(id => this.http.get<ITrainingResponse>(`https://api.gymsteer.com/api/clubs/${clubId}/trainings/${id}`).pipe(
        map(tr => tr.training)
      )),
      toArray()
    );
  }
}
