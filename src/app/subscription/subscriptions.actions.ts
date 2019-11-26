import {Action} from "@ngrx/store";
import {ITrainingHuntingSubscription} from "./training-hunting-subscription";

export enum SubscriptionsAction {
  GetAllSubscriptions = '[Subscription] Get All',
  GetAllSubscriptionsSuccess = '[Subscription] Get All Success',
  Subscribe = '[Subscription] Subscribe',
  SubscribeSuccess = '[Subscription] Subscribe Success'
}

export class GetAllSubscriptions implements Action {
  public readonly type = SubscriptionsAction.GetAllSubscriptions;
}

export class GetAllSubscriptionsSuccess implements Action {
  public readonly type = SubscriptionsAction.GetAllSubscriptionsSuccess;
  constructor(public subscriptions: ITrainingHuntingSubscription[]) {}
}

export class Subscribe implements Action {
  public readonly type = SubscriptionsAction.Subscribe;
  constructor(public autoBookingDeadline: string) {}
}

export class SubscribeSuccess implements Action {
  public readonly type = SubscriptionsAction.SubscribeSuccess
  constructor(public aubscription: ITrainingHuntingSubscription) {}
}

export type SubscriptionsActions = GetAllSubscriptions | GetAllSubscriptionsSuccess | Subscribe | SubscribeSuccess
