import { FC } from "react";

import { NavigationProp } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { StyleSheet, View } from "react-native";
import { CustomButton, CustomText } from "../../atoms";
import PrivacyAndTerms from "../PrivacyAndTerms/PrivacyAndTerms";

import { COLORS, FONT_SIZES } from "../../../styles/variables";

interface ILogOut {
  navigator: NavigationProp<any, any>;
}

const LogOut: FC<ILogOut> = ({ navigator }) => {
  return (
    <View style={styles.formContainer}>
      <View>
        <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
          See you soon...
        </CustomText>
      </View>
      <View style={{ marginTop: wp(6.44), paddingHorizontal: wp(3.5) }}>
        <CustomText fontSize={FONT_SIZES.l} fontWeight="400">
          Just a heads up, you don't need to sign out of the MangaClub app every
          time.
        </CustomText>
      </View>
      <View
        style={{
          alignSelf: "center",
          width: wp(44.78),
          marginTop: wp(6.44),
        }}
      >
        <CustomButton
          text="Log back in"
          color={COLORS.red}
          onPress={() => navigator.navigate("Login")}
        ></CustomButton>
      </View>
      <View style={{ paddingHorizontal: wp(3), marginTop: wp(11.34) }}>
        <PrivacyAndTerms></PrivacyAndTerms>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: wp(84),
    alignSelf: "center",
    alignContent: "center",
    paddingVertical: wp(8.58),
    backgroundColor: COLORS.lightBlack,
    opacity: 0.9,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
  },
});

export default LogOut;
