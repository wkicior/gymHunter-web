import {ITraining} from "./training";

export interface TrainingsState {
  clubId: number;
  selectedTraining: ITraining;
  trainings: ITraining[];
  subscribedTrainings: ITraining[];
}

export const initialTrainingsState: TrainingsState = {
  clubId: 8,
  selectedTraining: null,
  trainings: [],
  subscribedTrainings: []
};
