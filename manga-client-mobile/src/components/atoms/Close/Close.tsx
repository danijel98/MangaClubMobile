import { FC } from "react";

import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface IClose {
    size: number;
    color?: string;
}

const Close: FC<IClose> = ({ size, color="white" }) => <MCIcon color={color} size={size} name="close-circle" />;

export default Close;
