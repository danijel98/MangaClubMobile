import { FC } from "react";

import { UseFormReturn } from "react-hook-form";

import { CreateUser } from "../../../models";

import { StyleSheet, View } from "react-native";
import { CustomButton, Input } from "../../atoms";

import { COLORS } from "../../../styles/variables";

interface IRegistration {
  form: UseFormReturn<CreateUser>;
  onSubmit: (data: CreateUser) => any;
}

const Registration: FC<IRegistration> = ({ form, onSubmit }) => {
  const { formState, handleSubmit, control } = form;
  const { errors, isSubmitting } = formState;

  return (
    <View>
      <View style={style.inputField}>
        <Input
          control={control}
          name="email"
          placeholder="Email"
          errorMessage={errors.email?.message}
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
      <View style={style.inputField}>
        <Input
          control={control}
          name="confirmPassword"
          placeholder="Confirm password"
          secureTextEntry
          errorMessage={errors.confirmPassword?.message}
        ></Input>
      </View>
      <View style={style.inputField}>
        <Input
          control={control}
          name="name"
          placeholder="Name"
          errorMessage={errors.name?.message}
        ></Input>
      </View>
      <View style={style.inputField}>
        <Input
          control={control}
          name="username"
          placeholder="Username"
          secureTextEntry
          errorMessage={errors.username?.message}
        ></Input>
      </View>
      <View style={style.inputField}>
        <Input
          control={control}
          name="dateOfBirth"
          placeholder="Date of birth"
          secureTextEntry
          errorMessage={errors.dateOfBirth?.message}
        ></Input>
      </View>
      <View style={style.submitButton}>
        <CustomButton
          text="Sign-Up"
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
});

export default Registration;
