import { FC } from "react";

import { NavigationProp } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { LoginUser } from "../../../models";

import { StyleSheet, View } from "react-native";
import { CustomText, HR, CustomButton } from "../../atoms";
import { LoginForm, PrivacyAndTerms, WarningMessageMolecule } from "../../molecules";

import { COLORS, FONT_SIZES } from "../../../styles/variables";

interface ILogin {
  onSubmit: (data: LoginUser) => any;
  navigator: NavigationProp<any, any>;
  invalidLogin: boolean;
}

const LoginUserFormSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(8, "Password must be at least 8 characters"),
  rememberMe: yup.boolean().default(true),
});

const Login: FC<ILogin> = ({ onSubmit, navigator, invalidLogin }) => {
  const form = useForm<LoginUser>({
    mode: "onSubmit",
    defaultValues: {
      username: "",
      password: "",
      rememberMe: true,
    },
    resolver: yupResolver(LoginUserFormSchema),
  });

  return (
    <View style={styles.formContainer}>
      <View style={{ paddingHorizontal: wp(16.87) }}>
        <View>
          <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
            Get Reading...
          </CustomText>
        </View>
        <View style={styles.buttonFacebook}>
          <CustomButton
            text="Sign-In With Facebook"
            onPress={() => { }}
            color={COLORS.blue}
          ></CustomButton>
        </View>
        <View style={styles.buttonGoogle}>
          <CustomButton
            text="Sign-In With Google"
            onPress={() => { }}
            color={COLORS.grey}
          ></CustomButton>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: wp(6.13),
          }}
        >
          <HR />
          <View>
            <CustomText
              fontSize={FONT_SIZES.l}
              fontWeight="400"
              color={COLORS.grey}
            >
              {" "}
              Sign-in with email{" "}
            </CustomText>
          </View>
          <HR />
        </View>
        {invalidLogin ? <WarningMessageMolecule style={{ marginBottom: wp(6.13) }}
          text="Sorry, we can't find an account with this email address or password is incorrect. Please try again or create a new account." >
        </WarningMessageMolecule> : <></>}
        <LoginForm form={form} onSubmit={onSubmit}></LoginForm>
        <View style={{ marginTop: wp(10.73), alignItems: "center" }}>
          <CustomText
            fontSize={FONT_SIZES.l}
            fontWeight="bold"
            color={COLORS.grey}
          >
            Want Access?
          </CustomText>
          <CustomText
            fontSize={FONT_SIZES.l}
            fontWeight="bold"
            color={COLORS.white}
          >
            Get unlimited manga now.
          </CustomText>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: wp(44.78),
            marginTop: wp(4.29),
          }}
        >
          <CustomButton
            text="Get Access"
            onPress={() => {
              navigator.navigate("Registration");
            }}
            color={COLORS.red}
          ></CustomButton>
        </View>
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
  buttonGoogle: {
    marginTop: wp(2.45),
    marginBottom: wp(9.5),
  },
  buttonFacebook: {
    marginTop: wp(8.58),
    marginBottom: wp(2.45),
  },
});

export default Login;
