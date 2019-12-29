import {ITrainingHuntingSubscription} from "./training-hunting-subscription";
import {ITraining} from "../training/training";

export interface ISubscribedTraining {
  trainingHuntingSubscription: ITrainingHuntingSubscription;
  training: ITraining;
}
