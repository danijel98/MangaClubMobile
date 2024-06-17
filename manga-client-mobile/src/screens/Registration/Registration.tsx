import { FC, useContext, useState } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { AuthDataContext, UserContext } from "../../contexts";

import { CreateUser } from "../../models";

import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { CustomButton, CustomText, IconWithLogoAndText } from "../../components/atoms";
import { RegistrationOrganism } from "../../components/organisms";

import background from "../../assets/images/background.png";
import { COLORS } from "../../styles/variables";
import { NavigationProp } from "@react-navigation/native";

interface IRegistration {
  navigation: NavigationProp<any, any>;
}

const Registration: FC<IRegistration> = ({ navigation }) => {
  const { registrate } = useContext(UserContext);
  const { setTokenValue } = useContext(AuthDataContext);
  const [invalidLogin, setInvalidLogin] = useState(false);


  const registrateUser = (user: CreateUser) => {
    registrate(user)
      .then((res) => {
        setInvalidLogin(false);

        if (res.headers["x-auth-token"]) {
          const token = res.headers["x-auth-token"];

          setTokenValue(token);
        }
      })
      .catch((err: any) => setInvalidLogin(true));
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.logo}>
          <IconWithLogoAndText></IconWithLogoAndText>
        </View>
        <RegistrationOrganism invalidLogin={invalidLogin} onSubmit={registrateUser}></RegistrationOrganism>
        <View style={{ marginVertical: 21 }}>
          <CustomButton
            text="Need Help?"
            color={COLORS.transparent}
            onPress={() => navigation.navigate("NeedHelp")}
            fontWeight="bold">
          </CustomButton>
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

export default Registration;
