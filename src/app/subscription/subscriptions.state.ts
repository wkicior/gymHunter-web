import {ITrainingHuntingSubscription} from "./training-hunting-subscription";

export interface SubscriptionsState {
  createdSubscription: ITrainingHuntingSubscription;
  selectedSubscription: ITrainingHuntingSubscription;
  subscriptions: ITrainingHuntingSubscription[];
}

export const initialSubscriptionsState: SubscriptionsState = {
  createdSubscription: null,
  selectedSubscription: null,
  subscriptions: []
};
