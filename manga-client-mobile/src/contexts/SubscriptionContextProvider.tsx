import { createContext, FC, useContext, useState } from "react";

import { Plan, Subscription } from "../models";

import { AxiosContext } from "./AxiosContextProvider";

interface ISubscriptionContext {
  subscription?: Subscription;
  plan?: Plan;
  getSubscription: () => void;
  getPlanForCustomer: () => void;
  cancelSubscription: (subscriptionStripeId: string) => void;
  reactivateSubscription: (subscriptionStripeId: string) => void;
  changePaymentMethod: () => void;
}

const SubscriptionContext = createContext({} as ISubscriptionContext);

interface SubscriptionContextProps {
  children: React.ReactNode;
}

const SubscriptionContextProvider: FC<SubscriptionContextProps> = (props) => {
  const [subscription, setSubscription] = useState<Subscription>();
  const [plan, setPlan] = useState<Plan>();

  const { backend } = useContext(AxiosContext);

  const getSubscription = () => {
    backend.get("/api/subscriptions/my").then((res) => {
      if (res && res.data) {
        setSubscription(res.data);
      }
    });
  };

  const cancelSubscription = (subscriptionStripeId: String) => {
    backend.put(`/api/subscriptions/${subscriptionStripeId}/cancel`)
      .then((res) => {
        if (res && res.data) {
          setSubscription(res.data);
        }
      });
  };

  const reactivateSubscription = (subscriptionStripeId: String) => {
    backend.put(`/api/subscriptions/${subscriptionStripeId}/reactivate`)
      .then((res) => {
        if (res && res.data) {
          setSubscription(res.data);
        }
      });
  };

  const getPlanForCustomer = () => {
    backend.get("/api/subscriptions/plan/for-me").then((res) => {
      if (res && res.data) {
        setPlan(res.data);
      }
    });
  };

  const changePaymentMethod = () => {
    backend.get("/api/subscriptions/my/customise").then((res) => {
      if (res.data) {
        window.location = res.data;
      }
    });
  };

  const providerValue = {
    subscription,
    getSubscription,
    cancelSubscription,
    reactivateSubscription,
    plan,
    getPlanForCustomer,
    changePaymentMethod,
  };

  return (
    <SubscriptionContext.Provider value={providerValue}>
      {props.children}
    </SubscriptionContext.Provider>
  );
};

export { SubscriptionContextProvider, SubscriptionContext };
