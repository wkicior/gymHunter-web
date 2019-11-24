import {State} from "../reducers";
import {createSelector} from "@ngrx/store";
import {TrainingsState} from "./trainings.state";

const selectTrainingsState = (state: State) => state.trainingsState;

export const selectTrainings = createSelector(
  selectTrainingsState,
  (state: TrainingsState) => state.trainings
);

export const selectClubId = createSelector(
  selectTrainingsState,
  (state: TrainingsState) => state.clubId
);

