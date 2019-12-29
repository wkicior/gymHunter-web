import {initialTrainingsState, TrainingsState} from "./trainings.state";
import {TrainingsAction, TrainingsActions} from "./trainings.actions";

export const trainingsReducers = (
  state = initialTrainingsState,
  action: TrainingsActions
): TrainingsState => {
  switch(action.type) {
    case TrainingsAction.GetTrainingsSuccess: {
      return {
        ...state,
        trainings: action.trainings
      }
    }
    case TrainingsAction.GetTrainingSuccess: {
      return {
        ...state,
        selectedTraining: action.training
      }
    }
    case TrainingsAction.GetTrainingsForSubscriptionsSuccess: {
      return {
        ...state,
        subscribedTrainings: action.trainings
      }
    }
    default:
      return state;
  }
};
