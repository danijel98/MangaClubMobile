import { FC, useState } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import * as Animatable from "react-native-animatable";

import { format, parse } from "date-fns";


import { Platform, StyleSheet, View, } from "react-native";
import { Calendar, CustomText, Input, HR } from "../../atoms";
import { AcordionMolecule } from "../../molecules";

import { COLORS, FONT_SIZES } from "../../../styles/variables";

import * as yup from "yup";
import { UseFormReturn } from "react-hook-form";

import { TouchableOpacity } from "react-native-gesture-handler";

//@ts-ignore
import DateTimePicker from "@react-native-community/datetimepicker";


interface ISettings {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => any;
  userDetails: any;
  setUserDetails: (val: any) => void;
  change: any;
  setChange: (val: any) => void;
  formPassword: UseFormReturn<any>;
  resetPassword: any;
  setResetPassword: (val: any) => void;
  formChangedPassword: () => void;

}

const Settings: FC<ISettings> = ({ form, onSubmit, userDetails, setUserDetails, 
  setChange, 
  change, 
  formPassword,
  resetPassword,
  setResetPassword,
  formChangedPassword, }) => {

  const {
    register: register,
    formState: formState,
    getFieldState: getFieldState,
    control: control,
  } = form;
  const { errors: errors } = formState;


  const {
    register: register1,
    formState: formState1,
    getFieldState: getFieldState1,
    control: control1,
  } = formPassword;
  const { errors: errors1 } = formState1;

  const [showFinalDatePkr, setShowFinalDatePkr] = useState(false);

  const openFinalDatePicker = () => {
    setShowFinalDatePkr(true);
  };

  const data = [
    {
      title: 'My name',
      input: <View style={{ width: wp(60) }}><Input control={control}
        name="name"
        placeholder="Name"
        defaultValue={register("name")}
        onEndEditing={() => setUserDetails({ ...userDetails, name: control._formValues.name })}
        errorMessage={errors.name?.message}
      ></Input>
      </View>
    },
    {
      title: 'My membership',
      input: <CustomText>Not implemented</CustomText>
    },
    {
      title: 'Change my password',
      input: <View style={{ width: wp(60), marginVertical: 3 }}>
        <View style={{ marginVertical: wp(1) }}>
          <Input control={control1}
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            onEndEditing={() => setResetPassword({ ...resetPassword, password: control1._formValues.password })}
            errorMessage={errors1.password?.message}
          ></Input>
        </View>
        <View style={{ marginVertical: wp(1) }}>
          <Input control={control1}
            name="passwordConfirm"
            placeholder="Confirm password"
            secureTextEntry={true}
            onEndEditing={() => setResetPassword({ ...resetPassword, passwordConfirm: control1._formValues.passwordConfirm })}
            errorMessage={errors1.passwordConfirm?.message}
          ></Input>
        </View>
      </View>
    },
    {
      title: 'My email',
      input: <View style={{ width: wp(60) }}>
        <Input control={control}
          name="email"
          placeholder="Email"
          editable={false}
          selectTextOnFocus={false}
          defaultValue={register("username")}></Input>
      </View>
    },
    {
      title: 'Change my phone number',
      input: <CustomText>Not implemented</CustomText>
    },
    {
      title: 'Billing details',
      input: <CustomText>Not implemented</CustomText>
    },
    {
      title: 'My Birthday',
      input:
        <View style={{ width: wp(60) }}>
          <TouchableOpacity
            onPress={() => {
              openFinalDatePicker();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderColor: COLORS.darkGrey,
                backgroundColor: COLORS.black,
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 3,
                paddingRight: wp(2),
              }}
            >
              <Input control={control}
                name="dateOfBirth"
                placeholder="dateOfBirth"
                defaultValue={String(new Date(register("dateOfBirth") as any))}
                errorMessage={errors.dateOfBirth?.message}></Input>
              <Calendar color="white" size={wp(5)}></Calendar>
            </View>
          </TouchableOpacity>
        </View>
    },
  ];


  const renderHeader = (
    content: any,
    index: number,
    isActive: boolean,
    sections: any,
  ) => {
    return (
      <View>
        <Animatable.View duration={100} style={styles.header}>
          <View
            style={{
              paddingVertical: wp(3),
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CustomText fontSize={FONT_SIZES.l} fontWeight="bold">
              {content.title}
            </CustomText>
          </View>
        </Animatable.View>
        {!isActive ? <HR></HR> : <></>}
      </View>
    );
  };

  const renderContent = (
    content: any,
    index: number,
    isActive: boolean,
    sections: any,
  ) => {
    return (
      <View>
        <Animatable.View duration={100}>
          <Animatable.Text
            style={{ textAlign: "center", paddingVertical: wp(3) }}
          >
            <CustomText>{content.input}</CustomText>
          </Animatable.Text>
        </Animatable.View>
        {isActive ? <HR></HR> : <></>}
      </View>
    );
  };

  return (
    <View style={styles.formContainer}>
      <View style={{ width: wp(85), alignSelf: "center" }}>
        <HR></HR>
        <AcordionMolecule expandMultiple={true} data={data} renderContent={renderContent} renderHeader={renderHeader} />
        {showFinalDatePkr && (
          <DateTimePicker
            testID="dateTimePicker"
            value={parse(control._formValues.dateOfBirth, "yyyy-MM-dd", new Date())}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            maximumDate={new Date()}
            onChange={(event: { type: any; }, selectedDate: any) => {
              setShowFinalDatePkr(false);
              if (event.type !== "dismissed") {
                let final = format(selectedDate, "yyyy-MM-dd")
                form.setValue("dateOfBirth", final)
                setUserDetails({ ...userDetails, dateOfBirth: control._formValues.dateOfBirth })
                setChange(!change)
              }
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: wp(100),
    alignContent: "center",
    paddingVertical: wp(8.58),
    backgroundColor: "#151515",
    opacity: 0.9,
    borderColor: "#000000",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
  },
  header: {
    padding: wp(3),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
