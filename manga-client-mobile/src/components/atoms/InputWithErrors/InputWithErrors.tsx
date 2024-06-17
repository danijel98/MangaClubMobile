import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { useController } from "react-hook-form";

import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONT_SIZES } from "../../../styles/variables";

interface IInputWithErrors {
  name: string;
  control: any;
  defaultValue?: any;
  placeholder: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  borderWidth?:number;
  editable?:boolean;
  selectTextOnFocus?:boolean;
  onEndEditing?: any;
  onBlur?: any;
}

const InputWithErrors: FC<IInputWithErrors> = ({
  name,
  control,
  errorMessage,
  defaultValue = "",
  placeholder,
  secureTextEntry = false,
  borderWidth=1,
  editable = true,
  selectTextOnFocus = true,
  onEndEditing,
  onBlur,
}) => {
  const { field } = useController({
    control,
    defaultValue: defaultValue,
    name,
  });
  return (
    <View>
      <View>
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={[styles.input, {borderWidth:borderWidth}]}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
          onEndEditing={onEndEditing}
        />
      </View>
      {errorMessage ? (
        <View>
          <Text style={{ fontSize: FONT_SIZES.m, color: COLORS.red }}>
            {errorMessage}.
          </Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: wp(3),
    backgroundColor: COLORS.black,
    color: COLORS.grey,
    borderColor: COLORS.darkGrey,
    borderStyle: "solid",
    borderRadius: 3,
    fontWeight: "400",
    fontSize: FONT_SIZES.l,
    textAlign: "left",
  },
});

export default InputWithErrors;
