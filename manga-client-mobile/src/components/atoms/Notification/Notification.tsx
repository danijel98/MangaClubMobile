import { FC } from "react";
import { ColorValue } from "react-native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { COLORS } from "../../../styles/variables";

interface INotification {
  color?: number | ColorValue;
}

const Notification: FC<INotification> = ({ color = COLORS.white }) => (
  <MCIcon color={color} size={wp(8)} name="bell" />
);

export default Notification;
