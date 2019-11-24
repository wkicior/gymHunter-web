import {Action} from "@ngrx/store";
import {ITraining} from "./training";
import {Moment} from "moment";

export enum TrainingsAction {
  GetTrainings = '[Trainings] Get Trainings',
  GetTrainingsSuccess = '[Trainings] Get Trainings Success'
}

export class GetTrainings implements Action {
  public readonly type = TrainingsAction.GetTrainings;
  constructor(public fromDate: string, public toDate: string) {}
}

export class GetTrainingsSuccess implements Action {
  public readonly type = TrainingsAction.GetTrainingsSuccess;
  constructor(public trainings: ITraining[]) {}
}

export type TrainingsActions = GetTrainings | GetTrainingsSuccess
