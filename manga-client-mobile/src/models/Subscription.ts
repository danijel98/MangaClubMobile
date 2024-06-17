import { CardInfo } from "./CardInfo";
import { SubscriptionType } from "./SubscriptionType";

export interface Subscription {
  startDate: string;
  endDate: string;
  stripeId: string;
  subscriptionType: SubscriptionType;
  status: string;
  cardInfo: CardInfo;
}
