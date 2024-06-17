import { FC } from "react";

import { API_URL } from "react-native-dotenv";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { ScrollView, StyleSheet, TouchableHighlight, View } from "react-native";
import { StoryImage } from "../../atoms";
import { ImageWithNumberMolecule } from "../../molecules";

import { getResourceNameFromAWSUrl } from "../../../utils/awsUtils";

interface IStoryPreview {
  storyImage: string;
  number: number;
  chapterImages: string[];
  onPress?: any;
}

const StoryPreview: FC<IStoryPreview> = ({
  storyImage,
  number,
  chapterImages,
  onPress,
}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        <ImageWithNumberMolecule
          number={number}
          imageUrl={`${API_URL}/api/resizer/image?width=388&height=572&file=${getResourceNameFromAWSUrl(
            storyImage
          )}`}
          onPress={onPress}
        />
      </View>
      <View style={{ flexDirection: "row", marginLeft: wp(5) }}>
        {chapterImages.map((image, index) => {
          return (
            <TouchableHighlight key={index} onPress={onPress}>
              <View>
                <StoryImage
                  style={styles.image}
                  storyImage={`${API_URL}/api/resizer/image?width=388&height=572&file=${getResourceNameFromAWSUrl(
                    image
                  )}`}
                />
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp(24.62),
    height: wp(36.42),
  },
});

export default StoryPreview;
