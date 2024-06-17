import { FC } from "react";

import { Text } from "react-native";
import { COLORS, FONT_SIZES } from "../../../styles/variables";

interface ICustomText {
  color?: string;
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
  fontSize?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  children?: React.ReactNode;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  addFontStyle?: boolean;
  textShadowOffset?:any,
  textShadowRadius?:number,
  numberOfLines?:number,
}

const CustomText: FC<ICustomText> = ({
  color = COLORS.white,
  fontWeight = "normal",
  fontSize = FONT_SIZES.l,
  textAlign = "center",
  children,
  textDecorationLine,
  addFontStyle = false,
  textShadowOffset,
  textShadowRadius,
  numberOfLines
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode='tail'
      style={{
        color: color,
        fontWeight: fontWeight,
        fontSize,
        textAlign,
        textDecorationLine: textDecorationLine ? textDecorationLine : "none",
        fontStyle: addFontStyle ? "italic" : "normal",
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: textShadowOffset,
        textShadowRadius: textShadowRadius,

      }}
    >
      {children}
    </Text>
  );
};

export default CustomText;
