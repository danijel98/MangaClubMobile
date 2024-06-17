import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Library } from "../../../models";

import { API_URL } from "react-native-dotenv";

import { StyleSheet, View } from "react-native";
import { CustomText } from "../../atoms";
import { TouchableStoryImage } from "../../molecules";

import { FONT_SIZES } from "../../../styles/variables";

import { getResourceNameFromAWSUrl } from "../../../utils/awsUtils";

interface ILibrary {
  library: Library;
  onPress: any;
}

const LibraryOrganism: FC<ILibrary> = ({ library, onPress }) => {
  const renderItem = (itemToRender: any, index: number) => {
    return (
      <View key={index} style={styles.story}>
        <TouchableStoryImage
          imageUrl={`${API_URL}/api/resizer/image?width=388&height=572&file=${getResourceNameFromAWSUrl(
            itemToRender.smallCoverImage.imageUrl ?? ""
          )}`}
          onPress={() => onPress(itemToRender.id)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
        My Library
      </CustomText>

      {library.stories.length ? (
        <View style={styles.stories}>
          {library.stories.map((item, index) => {
            return renderItem(item, index);
          })}
        </View>
      ) : (
        <View style={{ marginVertical: wp(5) }}>
          <CustomText fontSize={FONT_SIZES.xl}>
            No stories in library
          </CustomText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
  },
  stories: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: wp(2),
    marginTop: wp(3),
    justifyContent: "space-between",
  },
  story: {
    margin: wp(2),
    width: wp(24.62),
    height: wp(36.42),
    borderRadius: 6,
  },
});

export default LibraryOrganism;
