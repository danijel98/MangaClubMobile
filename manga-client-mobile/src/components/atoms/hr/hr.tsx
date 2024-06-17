import { FC } from "react";
import { View } from "react-native";
import { COLORS } from "../../../styles/variables";

interface IHR {
  color?: string;
  thickness?: number;
}

const HR: FC<IHR> = ({ color = COLORS.grey, thickness = 1 }) => {
  return (
    <View
      style={{
        flex: 1,
        borderBottomColor: color,
        borderBottomWidth: thickness,
      }}
    />
  );
};

export default HR;
