export interface SubscriptionRequest {
  externalSystemId: number;
  clubId: number;
  huntingDeadline: Date;
  autoBookingDeadline: String; //Date here fails on wrong format
  huntingStartTime: Date;
}
