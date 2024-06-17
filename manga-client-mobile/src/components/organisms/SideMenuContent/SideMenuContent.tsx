import { FC, useContext } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { AuthDataContext } from "../../../contexts";

import { StyleSheet, View } from "react-native";
import { HelpIcon, LogoutIcon, SettingsIcon } from "../../atoms";
import { ButtonWithIcon } from "../../molecules";

interface ISideMenu {
  navigation: any;
}

const SideMenuContent: FC<ISideMenu> = ({ navigation }) => {
  const { removeToken } = useContext(AuthDataContext);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <ButtonWithIcon
          Icon={SettingsIcon}
          text="Settings"
          onPress={() => navigation.navigate("Settings")}
        ></ButtonWithIcon>
      </View>
      <View style={styles.button}>
        <ButtonWithIcon
          Icon={HelpIcon}
          text="Help centre"
          onPress={() => {}}
        ></ButtonWithIcon>
      </View>
      <View style={styles.button}>
        <ButtonWithIcon
          Icon={LogoutIcon}
          text="Sign out"
          onPress={() => {
            removeToken();
          }}
        ></ButtonWithIcon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    marginVertical: wp(4.5),
  },
});

export default SideMenuContent;
