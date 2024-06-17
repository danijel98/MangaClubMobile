import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Story } from "../../../models";

import { StyleSheet, View } from "react-native";
import { CustomButton, CustomText } from "../../atoms";
import { StoryCoverWithShadow } from "../../molecules";

interface IStoryCover {
  story?: Story;
  onPress: any;
}

const StoryCover: FC<IStoryCover> = ({ story, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.storyCoverContainer}>
        <StoryCoverWithShadow story={story}></StoryCoverWithShadow>
      </View>
      <View style={styles.button}>
        <CustomButton
          text="Read now"
          fontWeight="500"
          onPress={onPress}
        ></CustomButton>
      </View>
      <View style={styles.genresContainer}>
        <CustomText>
          {story?.genres?.map((genre, index) => {
            if (!story.genres) {
              return;
            }

            if (index < story.genres.length - 1) {
              return genre.name + " - ";
            } else {
              return genre.name;
            }
          })}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: "relative",
  },
  storyCoverContainer: {
    height: 402,
  },
  button: {
    position: "absolute",
    bottom: "11.1%",
    width: "28.2%",
    alignSelf: "center",
    zIndex: 3,
  },
  genresContainer: {
    marginTop: wp(3),
  },
});

export default StoryCover;
