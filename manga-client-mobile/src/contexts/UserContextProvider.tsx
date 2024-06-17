import { AxiosResponse } from "axios";
import { createContext, FC, useContext } from "react";

import { CreateUser } from "../models";

import { AxiosContext } from "./AxiosContextProvider";

interface IUserContext {
  registrate: (user: CreateUser) => Promise<AxiosResponse<any, any>>;
  changeUserDetails: (userDetails: any) => Promise<AxiosResponse<any, any>>;
}

const UserContext = createContext({} as IUserContext);

interface UserContextProps {
  children: React.ReactNode;
}
const UserContextProvider: FC<UserContextProps> = (props) => {
  const { backend } = useContext(AxiosContext);

  const registrate = async (data: CreateUser) => {
    const user = {
      email: data.email,
      password: data.password,
      name: data.name,
      nickname: data.username,
      dateOfBirth: data.dateOfBirth.getTime(),
    };

    return await backend.post("/api/users/customer/registration", user);
  };

  const changeUserDetails = async (userDetails: any) => {
    return await backend.put(`/api/users/settings`,userDetails);
  };

  const providerValue = {
    registrate,
    changeUserDetails,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
