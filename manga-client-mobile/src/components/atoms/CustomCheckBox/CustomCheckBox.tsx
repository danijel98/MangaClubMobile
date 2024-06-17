import { FC } from "react";

import { useController } from "react-hook-form";

import { StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";

import { COLORS } from "../../../styles/variables";

interface ICustomCheckBox {
  name: string;
  control: any;
  defaultValue?: string;
  errorMessage?: string;
}
const CustomCheckBox: FC<ICustomCheckBox> = ({
  name,
  control,
  defaultValue,
  errorMessage,
}) => {
  const { field } = useController({
    control,
    defaultValue: defaultValue,
    name,
  });

  return (
    <Checkbox
      status={field.value ? "checked" : "unchecked"}
      onPress={() => field.onChange(!field.value)}
      color={COLORS.grey}
    />
  );
};

const styles = StyleSheet.create({
  checkBox: {},
});

export default CustomCheckBox;
