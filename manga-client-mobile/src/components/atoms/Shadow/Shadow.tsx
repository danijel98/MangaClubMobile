import { FC } from "react";

import { LinearGradient } from "expo-linear-gradient";

interface IShadow {
  colors?: string[];
}

const Shadow: FC<IShadow> = ({ colors = ["rgba(0,0,0,1)", "transparent"] }) => {
  return <LinearGradient style={{ flex: 1 }} colors={colors}></LinearGradient>;
};

export default Shadow;
