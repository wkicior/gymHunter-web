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
    case SubscriptionsAction.GetSubscriptionSuccess: {
      return {
        ...state,
        selectedSubscription: action.subscription
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
        createdSubscription: action.subscription
      }
    }
    case SubscriptionsAction.DeleteSubscriptionSuccess: {
      return {
        ...state,
        subscriptions: state.subscriptions.filter(s => s.id !== action.subscription.id),
        selectedSubscription: state.selectedSubscription.id === action.subscription.id ? null : state.selectedSubscription
      }
    }
    default:
      return state;
  }
};
