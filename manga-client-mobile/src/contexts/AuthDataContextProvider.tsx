import { createContext, FC, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface IAuthDataContext {
  token: string | null;
  loadTokenValue: () => Promise<void>;
  setTokenValue: (newToken: string) => void;
  removeToken: () => void;
}

const AuthDataContext = createContext({} as IAuthDataContext);

interface AuthDataContextProps {
  children: React.ReactNode;
}

const AuthDataContextProvider: FC<AuthDataContextProps> = (props) => {
  const [token, setToken] = useState<string | null>("");

  const loadTokenValue = async () => {
    const tokenFromStore = await AsyncStorage.getItem(
      "DFGy449v1bf69gre4gdf5f6gh6"
    );

    setToken(tokenFromStore);
  };

  const setTokenValue = (newToken: string) => {
    AsyncStorage.setItem("DFGy449v1bf69gre4gdf5f6gh6", newToken);

    setToken(newToken);
  };

  const removeToken = () => {
    AsyncStorage.removeItem("DFGy449v1bf69gre4gdf5f6gh6");

    setToken(null);
  };

  const providerValue = { token, loadTokenValue, setTokenValue, removeToken };

  return (
    <AuthDataContext.Provider value={providerValue}>
      {props.children}
    </AuthDataContext.Provider>
  );
};

export { AuthDataContextProvider, AuthDataContext };
