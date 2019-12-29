import {State} from "../reducers";
import {createSelector} from "@ngrx/store";
import {SubscriptionsState} from "./subscriptions.state";
import {TrainingsState} from "../training/trainings.state";

const selectSubscriptions = (state: State) => state.subscriptionsState;
const selectTrainings = (state: State) => state.trainingsState;

export const selectAllSubscriptions = createSelector(
  selectSubscriptions,
  (state: SubscriptionsState) => state.subscriptions
);

export const selectSelectedSubscriptions = createSelector(
  selectSubscriptions,
  (state: SubscriptionsState) => state.selectedSubscription
);

export const createdSubscription = createSelector(
  selectSubscriptions,
  (state: SubscriptionsState) => state.createdSubscription
);

export const selectSubscribedTrainings = createSelector(
  selectSubscriptions, selectTrainings,
  (state: SubscriptionsState, trainingsState: TrainingsState) => state.subscriptions.map(s => {
    let training = trainingsState.subscribedTrainings.find(t => t.id === s.externalSystemId);
    return {training: training, trainingHuntingSubscription: s};
  })
);

