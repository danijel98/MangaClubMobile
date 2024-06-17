import { FC } from "react";

import { NavigationProp } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { CustomButton, IconWithLogoAndText } from "../../components/atoms";
import { LogOutMolecule } from "../../components/molecules";

import background from "../../assets/images/background.png";

import { COLORS } from "../../styles/variables";

interface ILogOut {
  navigation: NavigationProp<any, any>;
}

const LogOut: FC<ILogOut> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.logo}>
          <IconWithLogoAndText></IconWithLogoAndText>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <LogOutMolecule navigator={navigation}></LogOutMolecule>
        </View>
        <View style={{ marginVertical: 21 }}>
          <CustomButton
            text="Need Help?"
            color={COLORS.transparent}
            onPress={() => navigation.navigate("NeedHelp")}
            fontWeight="bold"
          ></CustomButton>
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
    paddingTop: wp(10),
  },
  logo: {
    width: wp(62),
    height: wp(28.35),
    alignSelf: "center",
  },
});

export default LogOut;
