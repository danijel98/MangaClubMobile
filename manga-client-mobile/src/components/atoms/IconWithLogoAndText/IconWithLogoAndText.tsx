import { Image, StyleSheet } from "react-native";

import icon from "../../../assets/images/logo-with-text.png";

const IconWithLogoAndText = () => {
  return <Image style={style.image} source={icon}></Image>;
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});
export default IconWithLogoAndText;
