import { FC, useContext, useEffect, useState } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { NavigationProp } from "@react-navigation/native";

import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { CustomButton, CustomText, IconLogo } from "../../components/atoms";
import { HeaderOrganism, SettingsOrganism } from "../../components/organisms";

import { COLORS, FONT_SIZES } from "../../styles/variables";
import { AuthContext, UserContext } from "../../contexts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { parseISO, format, isBefore } from "date-fns";

const UpdateUserFormSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  name: yup.string().required("Name is required"),
  dateOfBirth: yup
    .date()
    .nullable()
    .default(null)
    .max(new Date(), "Invalid date of birth")
    .required("Date of birth is required"),
  mobilePhone: yup.string().required("Mobile phone is required"),
});

const ResetPasswordFormSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must have minimum of eight characters"),
  passwordConfirm: yup
    .string()
    .required("Repeat your password")
    .oneOf([yup.ref("password")], "Passwords don't match"),
});


interface ISettings {
  navigation: NavigationProp<any, any>;
}

const Settings: FC<ISettings> = ({ navigation }) => {

  const { getMe } = useContext(AuthContext);
  const { changePassword } = useContext(AuthContext);
  const { changeUserDetails } = useContext(UserContext);
  /*   const {
      subscription,
      cancelSubscription,
      getSubscription,
      reactivateSubscription,
    } = useContext(SubscriptionContext);
   */
  const [resetPassword, setResetPassword] = useState({
    password: "",
    passwordConfirm: "",
  });

  const [userDetails, setUserDetails] = useState({
    name: "",
    dateOfBirth: Date(),
  });

  const [change, setChange] = useState(false);

  useEffect(() => {
    //getSubscription();
    createForm();
  }, []);

  useEffect(() => {
    formChangedDetails();
  }, [userDetails])

  useEffect(() => {
    formChangedPassword();
  }, [resetPassword])

  const form = useForm<any>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      name: "",
      dateOfBirth: new Date(),
      phoneNumber: "",
    },
    resolver: yupResolver(UpdateUserFormSchema),
  });

  const formPassword = useForm<any>({
    mode: "onBlur",
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(ResetPasswordFormSchema),
  });

  const createForm = () => {
    getMe().then((res) => {
      form.setValue("email", res.data.username);
      form.setValue("name", res.data.name);
      form.setValue(
        "dateOfBirth",
        new Date(res.data.dateOfBirth).toISOString().substring(0, 10)
      );
      setUserDetails({
        ...userDetails,
        name: res.data.name,
        dateOfBirth: new Date(res.data.dateOfBirth)
          .toISOString()
          .substring(0, 10),
      });
    });
  };

  const formChangedPassword = () => {
    if (
      resetPassword.password.length >= 8 &&
      resetPassword.password === resetPassword.passwordConfirm
    ) {
      return (
        Alert.alert(
          "Confirm to submit",
          "Are you sure you want to change your password ?",
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: "cancel"
            },
            { text: "OK", onPress: () => handleSubmitPassword()}
          ]
        )
      )
    }
  };


  const formChangedDetails = () => {
    if (
      userDetails.name.length >= 1 &&
      isBefore(
        parseISO(userDetails.dateOfBirth),
        parseISO(format(new Date(), "yyyy-MM-dd"))
      )
    ) {
      handleSubmit();
    }
  };


  const changePasswordErrors = (m: any) => {
    let messageError;

    switch (m) {
      case "ERRORS.INVALID_CREDENTIALS":
        messageError = "Invalid credentials";
        break;
      default:
        messageError = "invalid change password";
    }
    return messageError;
  };

  const handleSubmit = () => {
    changeUserDetails(userDetails)
      .then(() => { })
      .catch((mess: any) => {
        alert("Change failed");
      });
  };

  const handleSubmitPassword = () => {
    changePassword(resetPassword.password)
      .then(() => {
        alert("Password change successful");
      })
      .catch((mess: any) => {
        let message = changePasswordErrors(mess.response.data.message);
        alert(message);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderOrganism allowBack={true} navigation={navigation} />
      <CustomText fontWeight="bold" fontSize={FONT_SIZES.xxl}>Settings</CustomText>
      <View style={styles.logo}>
        <IconLogo />
      </View>
      <CustomButton text="Change avatar" color={COLORS.transparent}></CustomButton>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <SettingsOrganism
          formPassword={formPassword}
          resetPassword={resetPassword}
          setResetPassword={setResetPassword}
          formChangedPassword={formChangedPassword}
          change={change} setChange={setChange}
          setUserDetails={setUserDetails}
          userDetails={userDetails}
          onSubmit={handleSubmit}
          form={form}>
        </SettingsOrganism>
      </View>
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
    width: wp(20),
    height: wp(20),
    alignSelf: "center",
    marginVertical: wp(4),
  },
  header: {
    padding: wp(3),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    alignSelf: "center",
    width: wp(25),
    marginVertical: wp(4),
  }
});

export default Settings;
