import { FC } from "react";

import { StyleSheet, Text, TouchableHighlight } from "react-native";

import { COLORS, FONT_SIZES } from "../../../styles/variables";

interface ICustomButton {
  text: string;
  textColor?: string;
  size?: number;
  onPress?: any;
  color?: string;
  disabled?: boolean;
  fontWeight?:
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
}

const CustomButton: FC<ICustomButton> = ({
  onPress,
  text,
  textColor = COLORS.white,
  size = FONT_SIZES.l,
  color = COLORS.red,
  disabled,
  fontWeight = "normal",
}) => {
  return (
    <TouchableHighlight
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ ...styles.buttonText, fontSize: size, color: textColor,fontWeight: fontWeight }}>
        {text}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    padding: 8,
    textAlign: "center",
  },
  buttonText: {
    textAlign: "center",
  },
});

export default CustomButton;
