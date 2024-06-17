import { FC, useContext } from "react";

import { NavigationProp } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { AuthDataContext } from "../../contexts";

import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import {
  CustomButton,
  CustomText,
  IconWithLogoAndText,
} from "../../components/atoms";

import { COLORS, FONT_SIZES } from "../../styles/variables";

import background from "../../assets/images/background.png";

interface IPayment {
  navigation: NavigationProp<any, any>;
}

const Payment: FC<IPayment> = ({ navigation }) => {
  const { removeToken } = useContext(AuthDataContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.contentContainer}>
          <View style={styles.logoutContainer}>
            <CustomButton
              text="Log out"
              color={COLORS.red}
              onPress={() => {
                removeToken();
              }}
            ></CustomButton>
          </View>
          <View style={styles.logo}>
            <IconWithLogoAndText></IconWithLogoAndText>
          </View>
          <View style={{ marginTop: wp(7) }}>
            <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
              Choose your plan
            </CustomText>
          </View>
          <View style={styles.subscriptionName}>
            <CustomText fontWeight="bold">Premium Monthly</CustomText>
            <CustomText fontWeight="bold">14 days FREE trial</CustomText>
          </View>
          <View style={styles.subscriptionDescription}>
            <CustomText>No commitments, cancel at any time.</CustomText>
            <CustomText />
            <CustomText>Unlimited reading on all your devices.</CustomText>
            <CustomText />
            <CustomText>
              Unlimited access to all future content and features, including
              recommendations.
            </CustomText>
          </View>
          <View style={styles.price}>
            <CustomText color={COLORS.red} fontWeight="bold">
              14 days FREE trial, then
            </CustomText>
            <CustomText color={COLORS.red} fontWeight="bold">
              $8 monthly
            </CustomText>
          </View>
          <View style={styles.next}>
            <CustomButton
              color={COLORS.red}
              text="Next"
              onPress={() => {}}
            ></CustomButton>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  logo: {
    width: wp(62),
    height: wp(28.35),
    alignSelf: "center",
    marginTop: wp(7),
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    opacity: 0.7,
  },
  logoutContainer: {
    width: wp(25),
    marginTop: wp(17),
    marginRight: wp(7),
    alignSelf: "flex-end",
  },
  subscriptionDescription: {
    marginTop: wp(7),
  },
  price: {
    marginTop: wp(20),
  },
  next: {
    alignSelf: "center",
    width: wp(20),
    marginTop: wp(20),
  },
  subscriptionName: {
    backgroundColor: COLORS.red,
    width: wp(69.09),
    height: wp(12.81),
    marginTop: wp(14),
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default Payment;
