import { FC } from "react";

import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface IBack {
    size: number;
    color?: string;
    onPress?:any;
}

const Back: FC<IBack> = ({ size, color="white",onPress }) => <MCIcon onPress={onPress} color={color} size={size} name="arrow-left" />;

export default Back;
