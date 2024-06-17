import { FC, useContext, useEffect } from "react";

import { DarkTheme, NavigationContainer } from "@react-navigation/native";

import { AuthDataContext } from "../contexts";

import {
  isLoggedIn,
  isSubscribed,
  isSubscriptionExpired,
} from "../utils/tokenUtils";

import NotLoggedInNavigation from "./NotLoggedInNavigation";
import NotSubscribedNavigation from "./NotSubscribedNavigation";
import SideNavigation from "./SideNavigation";
import { navigationRef } from "./RootNavigation";

const StackNavigation: FC<{}> = () => {
  const { token, loadTokenValue } = useContext(AuthDataContext);

  useEffect(() => {
    loadTokenValue();
  }, [token]);

  return (
    <NavigationContainer theme={DarkTheme} ref={navigationRef}>
      {!isLoggedIn(token ?? "") || isSubscriptionExpired(token ?? "") ? (
        <NotLoggedInNavigation />
      ) : isSubscribed(token ?? "") ? (
        <SideNavigation />
      ) : (
        <NotSubscribedNavigation />
      )}
    </NavigationContainer>
  );
};

export default StackNavigation;
