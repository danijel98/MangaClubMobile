import { FC } from "react";

import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface ICalendar {
    size: number;
    color?: string;
}

const Calendar: FC<ICalendar> = ({ size, color="white" }) => <MCIcon color={color} size={size} name="calendar" />;

export default Calendar;
