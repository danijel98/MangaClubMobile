import { FC } from "react";

import { AuthDataContextProvider } from "./AuthDataContextProvider";
import { AxiosContextProvider } from "./AxiosContextProvider";
import { AuthContextProvider } from "./AuthContextProvider";
import { UserContextProvider } from "./UserContextProvider";
import { PreferenceContextProvider } from "./PreferenceContextProvider";
import { HelpCentreContextProvider } from "./HelpCentreContextProvider";
import { SpecialCategoryContextProvider } from "./SpecialCategoryContextProvider";
import { TopRecommendationContextProvider } from "./TopRecommendationContextProvider";
import { SubscriptionContextProvider } from "./SubscriptionContextProvider";
import { LibraryContextProvider } from "./LibraryContextProvider";
import { StoryContextProvider } from "./StoryContextProvider";
import { NavigationContextProvider } from "./NavigationContextProvider";

interface GlobalContextProps {
  children: React.ReactNode;
}

const GlobalContextProvider: FC<GlobalContextProps> = (props) => {
  return (
    <NavigationContextProvider>
      <AuthDataContextProvider>
        <AxiosContextProvider>
          <AuthContextProvider>
            <UserContextProvider>
              <LibraryContextProvider>
                <StoryContextProvider>
                  <TopRecommendationContextProvider>
                    <SpecialCategoryContextProvider>
                      <PreferenceContextProvider>
                        <HelpCentreContextProvider>
                          {props.children}
                        </HelpCentreContextProvider>
                      </PreferenceContextProvider>
                    </SpecialCategoryContextProvider>
                  </TopRecommendationContextProvider>
                </StoryContextProvider>
              </LibraryContextProvider>
            </UserContextProvider>
          </AuthContextProvider>
        </AxiosContextProvider>
      </AuthDataContextProvider>
    </NavigationContextProvider>
  );
};

export default GlobalContextProvider;
