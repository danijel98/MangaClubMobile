import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CreateUser } from "../../../models";

import { StyleSheet, View } from "react-native";
import { CustomButton, CustomText, HR } from "../../atoms";
import { PrivacyAndTerms, RegistrationForm, WarningMessageMolecule } from "../../molecules";

import { COLORS, FONT_SIZES } from "../../../styles/variables";

interface IRegistration {
  onSubmit: (data: CreateUser) => any;
  invalidLogin: boolean;

}

const CreateUserFormSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords does not match")
    .min(8, "Password must be at least 8 characters")
    .required("Confirm password is required"),
  name: yup.string().required("Name is required"),
  username: yup.string().required("Nickname/Username is required"),
  dateOfBirth: yup
    .date()
    .typeError("Invalid date format")
    .max(new Date(), "Invalid date of birth")
    .required("Date of birth is required"),
});

const Registration: FC<IRegistration> = ({ onSubmit, invalidLogin}) => {
  const form = useForm<CreateUser>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      username: "",
      dateOfBirth: undefined,
    },
    resolver: yupResolver(CreateUserFormSchema),
  });

  return (
    <View style={styles.formContainer}>
      <View style={{ paddingHorizontal: wp(16.87) }}>
        <View>
          <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
            Get Access to Unlimited Manga
          </CustomText>
        </View>
        <View style={styles.buttonFacebook}>
          <CustomButton
            text="Sign-Up With Facebook"
            onPress={() => {}}
            color={COLORS.blue}
          ></CustomButton>
        </View>
        <View style={styles.buttonGoogle}>
          <CustomButton
            text="Sign-Up With Google"
            onPress={() => {}}
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
              Sign-up with email{" "}
            </CustomText>
          </View>
          <HR />
        </View>
        {invalidLogin ? <WarningMessageMolecule style={{ marginBottom: wp(6.13) }}
         text="Sorry, this email address is already in use. Try with another one." >
         </WarningMessageMolecule> : <></> }
        <RegistrationForm form={form} onSubmit={onSubmit}></RegistrationForm>
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

export default Registration;
