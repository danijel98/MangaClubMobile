import { FC } from "react";

import { TouchableHighlight, View } from "react-native";
import CustomText from "../../atoms/Text/Text";

interface IButtonWithIcon {
  text: string;
  Icon: any;
  onPress: any;
}

const ButtonWithIcon: FC<IButtonWithIcon> = ({ text, Icon, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={{ alignItems: "center" }}>
        <Icon />
        <CustomText>{text}</CustomText>
      </View>
    </TouchableHighlight>
  );
};

export default ButtonWithIcon;
