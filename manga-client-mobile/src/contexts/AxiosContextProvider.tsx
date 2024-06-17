import axios, { AxiosInstance } from "axios";

import { createContext, FC, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthDataContext } from "./AuthDataContextProvider";

import { API_URL } from "react-native-dotenv";

interface IAxiosContext {
  backend: AxiosInstance;
  isLoading: boolean;
}

const AxiosContext = createContext({} as IAxiosContext);

interface AxiosContextProps {
  children: React.ReactNode;
}

const AxiosContextProvider: FC<AxiosContextProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { removeToken } = useContext(AuthDataContext);

  const backend: AxiosInstance = axios.create({
    baseURL: API_URL,
  });

  const attachTokenOnRequest = async (config: any) => {
    const token: string | null = await AsyncStorage.getItem(
      "DFGy449v1bf69gre4gdf5f6gh6"
    );

    if (!token) {
      return config;
    }

    const headers = {
      "X-Auth-Token": token,
    };

    config.headers = headers;

    return config;
  };

  const handleError = (error: any) => {
    if (error.response.status === 401) {
      removeToken();
    }
  };

  backend.interceptors.request.use(
    async (config) => {
      setIsLoading(true);

      return await attachTokenOnRequest(config);
    },
    (error: any) => {
      Promise.reject(error);
    }
  );

  backend.interceptors.response.use((response) => {
    setIsLoading(false);

    return response;
  }, handleError);

  const providerValue = {
    backend,
    isLoading,
  };

  return (
    <AxiosContext.Provider value={providerValue}>
      {props.children}
    </AxiosContext.Provider>
  );
};

export { AxiosContext, AxiosContextProvider };
