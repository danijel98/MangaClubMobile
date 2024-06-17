import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { API_URL } from "react-native-dotenv";

import { Story } from "../../../models";

import { FlatList, StyleSheet, View } from "react-native";
import TouchableStoryImage from "../TouchableStoryImage/TouchableStoryImage";

import { getResourceNameFromAWSUrl } from "../../../utils/awsUtils";

interface IStoryCarousel {
  stories: Story[];
  onPress: any;
}

const StoryCarousel: FC<IStoryCarousel> = ({ stories, onPress }) => {
  const renderItem = (itemToRender: any) => {
    return (
      <View key={itemToRender.index} style={styles.story}>
        <TouchableStoryImage
          onPress={() => onPress(itemToRender.item.id)}
          imageUrl={`${API_URL}/api/resizer/image?width=388&height=572&file=${getResourceNameFromAWSUrl(
            itemToRender.item.smallCoverImage.imageUrl ?? ""
          )}`}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id?.toString() ?? ""}
        contentContainerStyle={styles.container}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "row",
  },
  story: {
    margin: wp(2),
    width: wp(24.62),
    height: wp(36.42),
    borderRadius: 6,
  },
});

export default StoryCarousel;
