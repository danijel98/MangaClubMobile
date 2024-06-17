import { FC } from "react";

import { NavigationProp } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { StyleSheet, View } from "react-native";
import { CustomButton, IconWithLogoAndText } from "../atoms";

import { COLORS } from "../../styles/variables";

interface IGuestHome {
  navigation: NavigationProp<any, any>;
}

const GuestHeader: FC<IGuestHome> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "50%" }}>
        <View style={styles.logo}>
          <IconWithLogoAndText></IconWithLogoAndText>
        </View>
      </View>
      <View
        style={{
          width: "50%",
          alignItems: "flex-end",
        }}
      >
        <View style={styles.logout}>
          <CustomButton
            text="Log in"
            color={COLORS.red}
            onPress={() => {
              navigation.navigate("Login");
            }}
          ></CustomButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  logo: {
    height: wp(20),
  },
  logout: {
    width: wp(25),
    height: wp(20),
    justifyContent: "center",
  },
});

export default GuestHeader;
