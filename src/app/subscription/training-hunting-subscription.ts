export interface ITrainingHuntingSubscription {
  id: string;
  externalSystemId: number;
  clubId: number;
  huntingDeadline: Date;
  autoBookingDeadline: Date;
  autoBookingDateTime: Date;
  notificationOnSlotsAvailableSentDateTime: Date;
}

