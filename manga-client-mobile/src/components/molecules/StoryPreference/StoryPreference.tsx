import { FC, useContext } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { PreferenceStory } from "../../../models";

import { PreferenceContext } from "../../../contexts";

import { FlatList, StyleSheet, TouchableHighlight } from "react-native";
import { StoryImage } from "../../atoms";

import { COLORS } from "../../../styles/variables";

interface IStoryPreference {
  stories: PreferenceStory[];
}

const StoryPreference: FC<IStoryPreference> = ({ stories }) => {
  const { selectedPreferences, setSelectedPreferences } =
    useContext(PreferenceContext);

  const updateStoriesInPreferences = (story: PreferenceStory) => {
    if (!isStoryInPreferences(story)) {
      setSelectedPreferences((existingPreferences) => {
        return [...existingPreferences, story];
      });
    } else {
      setSelectedPreferences(
        selectedPreferences.filter((s) => s.name !== story.name)
      );
    }
  };

  const isStoryInPreferences = (story: PreferenceStory) => {
    return selectedPreferences.findIndex((s) => s.name === story.name) !== -1
      ? true
      : false;
  };

  const renderItem = (itemToRender: any) => {
    return (
      <TouchableHighlight
        onPress={() => updateStoriesInPreferences(itemToRender.item)}
        key={itemToRender.index}
        style={
          isStoryInPreferences(itemToRender.item)
            ? styles.storySelected
            : styles.story
        }
      >
        <StoryImage storyImage={itemToRender.item.image} />
      </TouchableHighlight>
    );
  };

  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.container}
      numColumns={3}
      centerContent
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  story: {
    margin: wp(2),
    width: wp(24.62),
    height: wp(36.42),
    borderRadius: 6,
  },
  storySelected: {
    margin: wp(2),
    width: wp(24.62),
    height: wp(36.42),
    borderColor: COLORS.red,
    borderWidth: 3,
  },
});

export default StoryPreference;
