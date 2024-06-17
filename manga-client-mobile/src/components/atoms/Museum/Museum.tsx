import { FC } from "react";
import { ColorValue } from "react-native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import MIcon from "react-native-vector-icons/MaterialIcons";

import { COLORS } from "../../../styles/variables";

interface IMuseum {
  color?: number | ColorValue;
}

const Museum: FC<IMuseum> = ({ color = COLORS.white }) => (
  <MIcon color={color} size={wp(8)} name="museum" />
);

export default Museum;
