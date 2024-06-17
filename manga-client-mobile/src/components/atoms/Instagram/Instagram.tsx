import { FC } from "react";

import { Image, StyleSheet } from "react-native";

import instagram from "../../../assets/images/instagram.png";

const Instagram: FC<{}> = () => {
  return <Image style={style.image} source={instagram} />;
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});

export default Instagram;
