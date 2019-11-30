import {State} from "../reducers";
import {createSelector} from "@ngrx/store";
import {SubscriptionsState} from "./subscriptions.state";

const selectSubscriptions = (state: State) => state.subscriptionsState;

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

