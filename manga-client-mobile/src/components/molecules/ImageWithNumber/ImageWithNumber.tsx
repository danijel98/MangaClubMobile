import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { StyleSheet, TouchableHighlight, View } from "react-native";
import { CustomText, Shadow, StoryImage } from "../../atoms";

import { COLORS, FONT_SIZES } from "../../../styles/variables";

interface IImageWithNumber {
  imageUrl: string;
  number: number;
  onPress?: any;
}

const ImageWithNumber: FC<IImageWithNumber> = ({
  imageUrl,
  number,
  onPress,
}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.image}>
          <StoryImage storyImage={imageUrl} />
        </View>
        <View style={styles.shadow}>
          <Shadow />
        </View>
        <View style={styles.number}>
          <CustomText fontSize={FONT_SIZES.huge}>{number}</CustomText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: wp(24.62),
    height: wp(36.42),
    marginLeft: wp(10),
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: wp(24.62),
    height: wp(36.42),
    zIndex: 1,
  },
  number: {
    position: "absolute",
    top: 0,
    left: -40,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  shadow: {
    position: "absolute",
    height: "100%",
    right: 0,
    width: wp(36.42),
    transform: [{ rotate: "270deg" }],
    zIndex: 2,
  },
});

export default ImageWithNumber;
