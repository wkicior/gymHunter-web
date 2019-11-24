import {Action} from "@ngrx/store";
import {ITraining} from "./training";

export enum TrainingsAction {
  GetTrainings = '[Trainings] Get Trainings',
  GetTrainingsSuccess = '[Trainings] Get Trainings Success',
  GetTraining = '[Trainings] Get Training',
  GetTrainingSuccess = '[Trainings] Get Training Success',
}

export class GetTrainings implements Action {
  public readonly type = TrainingsAction.GetTrainings;
  constructor(public fromDate: string, public toDate: string) {}
}

export class GetTrainingsSuccess implements Action {
  public readonly type = TrainingsAction.GetTrainingsSuccess;
  constructor(public trainings: ITraining[]) {}
}

export class GetTraining implements Action {
  public readonly type = TrainingsAction.GetTraining;
  constructor(public id: number) {}
}

export class GetTrainingSuccess implements Action {
  public readonly type = TrainingsAction.GetTrainingSuccess;
  constructor(public training: ITraining) {}
}

export type TrainingsActions = GetTrainings | GetTrainingsSuccess | GetTraining | GetTrainingSuccess
