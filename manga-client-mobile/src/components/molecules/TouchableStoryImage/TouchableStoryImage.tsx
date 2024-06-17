import { FC } from "react";

import { StyleSheet, TouchableHighlight } from "react-native";
import { StoryImage } from "../../atoms";

interface ITouchableStoryImage {
  imageUrl: string;
  onPress: any;
}

const TouchableStoryImage: FC<ITouchableStoryImage> = ({
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <StoryImage storyImage={imageUrl} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TouchableStoryImage;
