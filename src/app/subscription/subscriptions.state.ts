import {ITrainingHuntingSubscription} from "./training-hunting-subscription";

export interface SubscriptionsState {
  subscriptions: ITrainingHuntingSubscription[];
}

export const initialSubscriptionsState: SubscriptionsState = {
  subscriptions: []
};
