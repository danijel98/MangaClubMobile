import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Story } from "../../../models";

import { FlatList, StyleSheet, View } from "react-native";
import StoryCover from "../StoryCover/StoryCover";

interface IStoriesCover {
  stories: Story[];
  onPress: any;
}

const StoriesCover: FC<IStoriesCover> = ({ stories, onPress }) => {
  const renderItem = (itemToRender: any) => {
    return (
      <View style={styles.storyCoverContainer}>
        <StoryCover
          onPress={() => onPress(itemToRender.item.id)}
          story={itemToRender.item}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id?.toString() ?? ""}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  storyCoverContainer: {
    width: wp(100),
    paddingHorizontal: wp(4),
  },
});

export default StoriesCover;
