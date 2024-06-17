import { FC } from "react";

import { Image, StyleSheet } from "react-native";

import twitter from "../../../assets/images/twitter.png";

const Twitter: FC<{}> = () => {
  return <Image style={style.image} source={twitter} />;
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});

export default Twitter;
