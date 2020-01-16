import {Action} from "@ngrx/store";
import {ITrainingHuntingSubscription} from "./training-hunting-subscription";

export enum SubscriptionsAction {
  GetAllSubscriptions = '[Subscription] Get All',
  GetAllSubscriptionsSuccess = '[Subscription] Get All Success',
  GetSubscription = '[Subscription] Get Subscription',
  GetSubscriptionSuccess = '[Subscription] Get Subscription Success',
  Subscribe = '[Subscription] Subscribe',
  SubscribeSuccess = '[Subscription] Subscribe Success',
  DeleteSubscription = '[Subscription] Delete',
  DeleteSubscriptionSuccess = '[Subscription] Delete Success',
  ClearSelectedSubscriptionIfAny = '[Subscription] Clear Selected Subscription If Any'
}

export class GetAllSubscriptions implements Action {
  public readonly type = SubscriptionsAction.GetAllSubscriptions;
}

export class GetAllSubscriptionsSuccess implements Action {
  public readonly type = SubscriptionsAction.GetAllSubscriptionsSuccess;
  constructor(public subscriptions: ITrainingHuntingSubscription[]) {}
}

export class GetSubscription implements Action {
  public readonly type = SubscriptionsAction.GetSubscription;
  constructor(public id: string) {}
}

export class GetSubscriptionSuccess implements Action {
  public readonly type = SubscriptionsAction.GetSubscriptionSuccess;
  constructor(public subscription: ITrainingHuntingSubscription) {}
}

export class Subscribe implements Action {
  public readonly type = SubscriptionsAction.Subscribe;
  constructor(public autoBookingDeadline: string) {}
}

export class SubscribeSuccess implements Action {
  public readonly type = SubscriptionsAction.SubscribeSuccess;
  constructor(public subscription: ITrainingHuntingSubscription) {}
}

export class ClearSelectedSubscriptionIfAny implements Action {
  public readonly type = SubscriptionsAction.ClearSelectedSubscriptionIfAny;
  constructor() {}
}

export class DeleteSubscription implements Action {
  public readonly type = SubscriptionsAction.DeleteSubscription;
  constructor(public id: string) {}
}

export class DeleteSubscriptionSuccess implements Action {
  public readonly type = SubscriptionsAction.DeleteSubscriptionSuccess;
  constructor(public subscription: ITrainingHuntingSubscription) {}
}

export type SubscriptionsActions =
  GetAllSubscriptions
  | GetAllSubscriptionsSuccess
  | GetSubscription
  | GetSubscriptionSuccess
  | Subscribe
  | SubscribeSuccess
  | DeleteSubscription
  | DeleteSubscriptionSuccess
  | ClearSelectedSubscriptionIfAny
