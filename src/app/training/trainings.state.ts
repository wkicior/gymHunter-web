import {ITraining} from "./training";

export interface TrainingsState {
  trainings: ITraining[];
}

export const initialTrainingsState: TrainingsState = {
  trainings: []
};
