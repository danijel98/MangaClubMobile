import { FC } from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { Chapter, Story } from "../../../models";

import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { BackIcon, CustomText } from "../../atoms";

import { COLORS } from "../../../styles/variables";

interface IReadingHeader {
  chapter?: Chapter;
  story?: Story;
  goBack: any;
}

const ReadingHeader: FC<IReadingHeader> = ({ chapter, story, goBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.goBack}>
        <TouchableHighlight onPress={goBack}>
          <BackIcon size={30} color={COLORS.white} />
        </TouchableHighlight>
      </View>
      <View style={styles.centerContent}>
        <CustomText>{story?.title}</CustomText>
        <View style={{ marginLeft: wp(2) }}>
          <CustomText>{chapter?.title}</CustomText>
        </View>
      </View>
    </View>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flexDirection: "row",
    height:
      Platform.OS === "ios" ? hp(100 * (75 / height)) : hp(100 * (60 / height)),
    backgroundColor: COLORS.black,
    alignItems: "flex-start",
    paddingTop: Platform.OS === "ios" ? 15 : 0,
  },
  goBack: {
    marginLeft: wp(2),
    width: "10%",
  },
  centerContent: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ReadingHeader;
