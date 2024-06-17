import { FC } from "react";

import { StyleSheet, View } from "react-native";
import { CustomCheckBox, CustomText } from "../../atoms";

import { FONT_SIZES } from "../../../styles/variables";

interface ICheckboxWithLabel {
  name: string;
  control: any;
  text: string;
}

const CheckboxWithLabel: FC<ICheckboxWithLabel> = ({ control, name, text }) => {
  return (
    <View style={styles.container}>
      <CustomCheckBox control={control} name={name}></CustomCheckBox>
      <CustomText fontSize={FONT_SIZES.m}>{text}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CheckboxWithLabel;
