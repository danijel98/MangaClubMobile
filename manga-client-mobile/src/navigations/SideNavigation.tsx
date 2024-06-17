import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { StyleSheet } from "react-native";
import SubscribedNavigation from "./SubscribedNavigation";
import { SideMenuContent } from "../components/organisms";

import { COLORS } from "../styles/variables";

const Drawer = createDrawerNavigator();

const SideNavigation: FC<{}> = () => {
  return (
    <Drawer.Navigator
      initialRouteName="SubscribedNavigations"
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.navigator,
        drawerType: "front",
        drawerPosition: "right",
      }}
      drawerContent={({ navigation }) => (
        <SideMenuContent navigation={navigation} />
      )}
    >
      <Drawer.Screen
        name="SubscribedNavigations"
        component={SubscribedNavigation}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  navigator: {
    width: wp(37),
    height: "100%",
    marginTop: "15%",
    opacity: 0.8,
    backgroundColor: COLORS.black,
  },
});

export default SideNavigation;
