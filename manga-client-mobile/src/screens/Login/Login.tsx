import { FC, useContext, useState } from "react";

import { NavigationProp } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { AuthContext, AuthDataContext } from "../../contexts";

import { LoginUser } from "../../models";

import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { CustomButton, IconWithLogoAndText } from "../../components/atoms";
import { LoginOrganism } from "../../components/organisms";

import background from "../../assets/images/background.png";
import { COLORS } from "../../styles/variables";

interface ILogin {
  navigation: NavigationProp<any, any>;
}

const Login: FC<ILogin> = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const { setTokenValue } = useContext(AuthDataContext);
  const [invalidLogin, setInvalidLogin] = useState(false);


  const loginUser = (user: LoginUser) => {
    login(user.username, user.password, user.rememberMe)
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
        <LoginOrganism
          navigator={navigation}
          onSubmit={loginUser}
          invalidLogin={invalidLogin}
        ></LoginOrganism>
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

export default Login;
