import { FC } from "react";

import { API_URL } from "react-native-dotenv";

import { Story } from "../../../models";

import { StyleSheet, View } from "react-native";
import { Shadow, StoryImage } from "../../atoms";

import { getResourceNameFromAWSUrl } from "../../../utils/awsUtils";

interface IStoryCoverWithShadow {
  story?: Story;
}

const StoryCoverWithShadow: FC<IStoryCoverWithShadow> = ({ story }) => {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View style={styles.shadowTop}>
        <Shadow />
      </View>
      <View style={styles.image}>
        <StoryImage
          storyImage={`${API_URL}/api/resizer/image?width=470&height=523&file=${getResourceNameFromAWSUrl(
            story?.smallCoverImage?.imageUrl ?? ""
          )}`}
        ></StoryImage>
      </View>
      <View style={styles.shadowBottom}>
        <Shadow />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  shadowTop: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "25.2%",
  },
  shadowBottom: {
    zIndex: 2,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "25.2%",
    transform: [{ rotate: "180deg" }],
  },
});
export default StoryCoverWithShadow;
