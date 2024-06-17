import { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PaymentScreen, PreferencesScreen } from "../screens";

const Stack = createNativeStackNavigator();

const NotSubscribedNavigation: FC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName="Payment">
      <Stack.Screen
        options={{
          title: "Payment",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
          headerShown: false,
        }}
        name={"Payment"}
        component={PaymentScreen}
      />
      <Stack.Screen
        options={{
          title: "Preferences",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
          headerShown: false,
        }}
        name={"Preferences"}
        component={PreferencesScreen}
      />
    </Stack.Navigator>
  );
};

export default NotSubscribedNavigation;
