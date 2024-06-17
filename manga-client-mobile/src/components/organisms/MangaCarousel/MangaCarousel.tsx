import { FC, useState } from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Story } from "../../../models";

import { View } from "react-native";
import { CustomButton, CustomText, StoryImage } from "../../atoms";
import { CarouselMolecule } from "../../molecules";

interface IMangaCarousel {
  stories: Story[];
  navigateToStoryPage: any;
}

const MangaCarousel: FC<IMangaCarousel> = ({ stories,navigateToStoryPage }) => {
  const [active, setActive] = useState(0);

  const renderItem = (content: any, index: number) => {
    return (
      <>
        <View
          style={{
            height: wp(65),
            marginTop: hp(2),
          }}
        >
          <StoryImage
            style={{ borderRadius: wp(4) }}
            storyImage={content.item.story.smallCoverImage.imageUrl}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: hp(2),
          }}
        >
          <CustomButton
            onPress={() => navigateToStoryPage(content.item.story.id)}
            text="Read now"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomText>
            {content.item.story.genres.map(
              (genre: { name: any }, index: number) =>
                genre.name +
                `${index < content.item.story.genres.length - 1 ? " - " : ""}`
            )}
          </CustomText>
        </View>
      </>
    );
  };

  return (
    <CarouselMolecule
      setActive={setActive}
      renderItem={renderItem}
      sources={stories}
      itemWidth={wp(47.5)}
      sliderWidth={wp(100)}
    ></CarouselMolecule>
  );
};

export default MangaCarousel;
