import { FC } from "react";
import { ColorValue } from "react-native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import MIcon from "react-native-vector-icons/MaterialIcons";

import { COLORS } from "../../../styles/variables";

interface IHome {
  color?: number | ColorValue;
}

const Home: FC<IHome> = ({ color = COLORS.white }) => (
  <MIcon color={color} size={wp(8)} name="home" />
);

export default Home;
