import {SubscriptionsAction, SubscriptionsActions} from "./subscriptions.actions";
import {initialSubscriptionsState, SubscriptionsState} from "./subscriptions.state";

export const subscriptionsReducers = (
  state = initialSubscriptionsState,
  action: SubscriptionsActions
): SubscriptionsState => {
  switch(action.type) {
    case SubscriptionsAction.GetAllSubscriptionsSuccess: {
      return {
        ...state,
        subscriptions: action.subscriptions
      }
    }
    case SubscriptionsAction.Subscribe: {
      return {
        ...state,
        createdSubscription: null
      }
    }
    case SubscriptionsAction.SubscribeSuccess: {
      return {
        ...state,
        createdSubscription: action.aubscription
      }
    }
    default:
      return state;
  }
};
