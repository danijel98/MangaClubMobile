import { FC } from "react";

import { Image, StyleSheet } from "react-native";

import discord from "../../../assets/images/discord.png";

const Discord: FC<{}> = () => {
  return <Image style={style.image} source={discord} />;
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});

export default Discord;
