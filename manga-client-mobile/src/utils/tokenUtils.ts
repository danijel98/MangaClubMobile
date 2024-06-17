import jwtDecode from "jwt-decode";

import { TokenUser } from "../models";

const checkToken = (token: string): TokenUser | null => {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};

const isLoggedIn = (token: string) => {
  const parsedToken = checkToken(token);

  if (!parsedToken) {
    return false;
  }

  return true;
};

const isSubscribed = (token: string) => {
  const parsedToken = checkToken(token);

  return parsedToken?.isSubscribed;
};

const isSubscriptionExpired = (token: string) => {
  const parsedToken = checkToken(token);

  if (!parsedToken?.subscriptionExpiresOn) {
    return false;
  }

  return parsedToken?.subscriptionExpiresOn < new Date().getTime();
};

export { checkToken, isLoggedIn, isSubscribed, isSubscriptionExpired };
