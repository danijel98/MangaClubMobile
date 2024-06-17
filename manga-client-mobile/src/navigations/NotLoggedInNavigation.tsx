import { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LoginScreen,
  LogOutScreen,
  RegistrationScreen,
  NeedHelpScreen,
  GuestHomeScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const NotLoggedInNavigation: FC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ title: "Home", headerShown: false }}
        name="Home"
        component={GuestHomeScreen}
      />
      <Stack.Screen
        options={{ title: "Login", headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ title: "Registration", headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />
      <Stack.Screen
        options={{ title: "LogOut", headerShown: false }}
        name="LogOut"
        component={LogOutScreen}
      />
      <Stack.Screen
        options={{ title: "NeedHelp", headerShown: false }}
        name="NeedHelp"
        component={NeedHelpScreen}
      />
    </Stack.Navigator>
  );
};

export default NotLoggedInNavigation;
