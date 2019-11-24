import {ITraining} from "./training";

export interface TrainingsState {
  clubId: number;
  trainings: ITraining[];
}

export const initialTrainingsState: TrainingsState = {
  clubId: 8,
  trainings: []
};
