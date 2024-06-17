import { AxiosPromise, AxiosResponse } from "axios";

import { createContext, FC, useContext } from "react";

import { AxiosContext } from "./AxiosContextProvider";

interface IAuthContext {
  login: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => AxiosPromise<void>;
  googleLogin: (access: any) => void;
  facebookLogin: (access: any) => void;
  getMe: () => Promise<AxiosResponse<any, any>>;
  getMySubscription: () => Promise<AxiosResponse<any, any>>;
  refreshToken: () => Promise<AxiosResponse<any, any>>;
  changePassword: (password: string) => Promise<AxiosResponse<any, any>>;

}

const AuthContext = createContext({} as IAuthContext);

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContextProvider: FC<AuthContextProps> = (props) => {
  const { backend } = useContext(AxiosContext);

  const login = (username: string, password: string, rememberMe: boolean) => {
    return backend({
      method: "post",
      url: "/api/login",
      data: {
        username,
        password,
        rememberMe,
      },
    });
  };

  const googleLogin = (access: any) => {
    backend({
      method: "post",
      url: "/api/googleLogin",
      data: access,
    })
      .then((res) => {
        if (res.data) {
          //addTokenInStorage(res.data.token);
        }
      })
      .catch((err: any) => console.error(err));
  };

  const facebookLogin = (access: any) => {
    backend({
      method: "post",
      url: "/api/fbLogin",
      data: access,
    })
      .then((res) => {
        if (res.data) {
          //addTokenInStorage(res.data.token);
        }
      })
      .catch((err: any) => console.error(err));
  };

  const getMe = async () => {
    return await backend.get("/api/me");
  };

  const getMySubscription = async () => {
    return await backend.get("/api/subscriptions/my");
  };

  const refreshToken = async () => {
    return await backend.get("/api/refresh");
  };

  const changePassword = async (password: string) => {
    return await backend.put(`/api/change-password/${password}`);
  };


  const providerValue = {
    login,
    googleLogin,
    facebookLogin,
    getMe,
    getMySubscription,
    refreshToken,
    changePassword,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
