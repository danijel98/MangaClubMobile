import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const FONT_SIZES = {
  s: 9,
  m: 12,
  l: 15,
  xl: 18,
  xxl: 20,
  xxxl: 30,
  huge: wp(25)
};

const COLORS = {
  red: "red",
  white: "#ffffff",
  blue: "#3b5998",
  grey: "#7c7a7a",
  lightBlack: "#151515",
  black: "#000000",
  darkGrey: "#232323",
  transparent: "transparent",
  warning: "#E87C03",
};

export { FONT_SIZES, COLORS };
