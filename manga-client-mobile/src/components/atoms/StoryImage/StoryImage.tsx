import { FC } from "react";

import { Image, ImageResizeMode, StyleSheet } from "react-native";

interface IStoryImage {
  storyImage: string;
  style?: any;
  resizeMode?: ImageResizeMode;
}

const StoryImage: FC<IStoryImage> = ({
  storyImage,
  style = { borderRadius: 6 },
  resizeMode,
}) => {
  return (
    <Image
      style={{ ...styles.image, ...style }}
      source={{ uri: storyImage }}
      resizeMode={resizeMode}
    ></Image>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default StoryImage;
