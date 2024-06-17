import { FC } from "react";
import { ColorValue } from "react-native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../../styles/variables";

interface ILibrary {
  color?: number | ColorValue;
}

const Library: FC<ILibrary> = ({ color = COLORS.white }) => (
  <MCIcon color={color} size={wp(8)} name="heart" />
);

export default Library;
