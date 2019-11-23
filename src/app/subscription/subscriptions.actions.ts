import {Action} from "@ngrx/store";
import {ITrainingHuntingSubscription} from "./training-hunting-subscription";

export enum SubscriptionsAction {
  GetAllSubscriptions = '[Subscription] Get All',
  GetAllSubscriptionsSuccess = '[Subscription] Get All Success'
}

export class GetAllSubscriptions implements Action {
  public readonly type = SubscriptionsAction.GetAllSubscriptions;
}

export class GetAllSubscriptionsSuccess implements Action {
  public readonly type = SubscriptionsAction.GetAllSubscriptionsSuccess;
  constructor(public subscriptions: ITrainingHuntingSubscription[]) {}
}

export type SubscriptionsActions = GetAllSubscriptions | GetAllSubscriptionsSuccess
