import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import MIcon from "react-native-vector-icons/MaterialIcons";

const Settings: FC<{}> = ({}) => {
  return <MIcon color="white" size={wp(8)} name="settings" />;
};

export default Settings;
