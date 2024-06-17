import { Image, StyleSheet } from "react-native";

import icon from "../../../assets/images/logo.png";

const IconLogo = () => {
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

export default IconLogo;
