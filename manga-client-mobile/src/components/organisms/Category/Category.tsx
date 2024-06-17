import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Story } from "../../../models";

import { View } from "react-native";
import { CustomText } from "../../atoms";
import { StoryCarousel } from "../../molecules";

interface ICategory {
  categoryName: string;
  stories: Story[];
  onPress: any;
}

const Category: FC<ICategory> = ({ categoryName, stories, onPress }) => {
  return (
    <View>
      <View style={{ marginHorizontal: wp(2) }}>
        <CustomText textAlign="left">{categoryName}</CustomText>
      </View>
      <StoryCarousel onPress={onPress} stories={stories}></StoryCarousel>
    </View>
  );
};

export default Category;
