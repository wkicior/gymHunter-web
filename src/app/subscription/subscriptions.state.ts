import {ITrainingHuntingSubscription} from "./training-hunting-subscription";

export interface SubscriptionsState {
  createdSubscription: ITrainingHuntingSubscription;
  subscriptions: ITrainingHuntingSubscription[];
}

export const initialSubscriptionsState: SubscriptionsState = {
  createdSubscription: null,
  subscriptions: []
};
