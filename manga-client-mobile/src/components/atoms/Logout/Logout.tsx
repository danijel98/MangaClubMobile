import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import MIcon from "react-native-vector-icons/MaterialIcons";

const Logout: FC<{}> = ({}) => {
  return <MIcon color="white" size={wp(8)} name="login" />;
};

export default Logout;
