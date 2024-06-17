import { FC } from "react";
import { ColorValue } from "react-native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import MIcon from "react-native-vector-icons/MaterialIcons";

import { COLORS } from "../../../styles/variables";

interface IFingerprint {
  color?: number | ColorValue;
}

const Fingerprint: FC<IFingerprint> = ({ color = COLORS.white }) => (
  <MIcon color={color} size={wp(8)} name="fingerprint" />
);

export default Fingerprint;
