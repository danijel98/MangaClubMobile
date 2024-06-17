import { createContext, FC, useState } from "react";

interface INavigationContext {
  isFullScreen: boolean;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationContext = createContext({} as INavigationContext);

interface NavigationContextProps {
  children: React.ReactNode;
}

const NavigationContextProvider: FC<NavigationContextProps> = (props) => {
  const [isFullScreen, setFullScreen] = useState<boolean>(false);

  const providerValue = { isFullScreen, setFullScreen };

  return (
    <NavigationContext.Provider value={providerValue}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationContextProvider };
