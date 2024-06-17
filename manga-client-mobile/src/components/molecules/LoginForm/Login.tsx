import { FC } from "react";

import { UseFormReturn } from "react-hook-form";

import { LoginUser } from "../../../models";

import { StyleSheet, View } from "react-native";
import { CustomButton, Input } from "../../atoms";
import CheckboxWithLabel from "../CheckboxWithLabel/CheckboxWithLabel";

import { COLORS } from "../../../styles/variables";

interface ILogin {
  form: UseFormReturn<LoginUser>;
  onSubmit: (data: LoginUser) => any;
}

const Login: FC<ILogin> = ({ form, onSubmit }) => {
  const { formState, handleSubmit, control } = form;
  const { errors, isSubmitting } = formState;

  return (
    <View>
      <View style={style.inputField}>
        <Input
          control={control}
          name="username"
          placeholder="Username"
          errorMessage={errors.username?.message}
        ></Input>
      </View>
      <View style={style.inputField}>
        <Input
          control={control}
          name="password"
          placeholder="Password"
          secureTextEntry
          errorMessage={errors.password?.message}
        ></Input>
      </View>
      <View style={style.checkBox}>
        <CheckboxWithLabel
          control={control}
          name="rememberMe"
          text="Remember me"
        ></CheckboxWithLabel>
      </View>
      <View style={style.submitButton}>
        <CustomButton
          text="Sign-In"
          disabled={isSubmitting}
          onPress={handleSubmit(onSubmit)}
          color={COLORS.red}
        ></CustomButton>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inputField: {
    marginBottom: 5,
  },
  submitButton: {
    marginTop: 10,
  },
  checkBox: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
