import { FC } from "react";

import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface IFullScreen {
  size: number;
  color?: string;
}

const FullScreen: FC<IFullScreen> = ({ size, color = "white" }) => (
  <MCIcon color={color} size={size} name="fullscreen" />
);

export default FullScreen;
