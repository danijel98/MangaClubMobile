import { FC, useContext, useEffect, useRef } from "react";

import { useScrollToTop } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Story, StorySpecialCategory } from "../../models";

import {
  AxiosContext,
  SpecialCategoryContext,
  TopRecommendationContext,
} from "../../contexts";

import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Loader } from "../../components/atoms";
import { ImageWithNumberMolecule } from "../../components/molecules";
import {
  CategoryOrganism,
  HeaderOrganism,
  StoriesCover,
  StoryPreviewOrganism,
} from "../../components/organisms";

import { COLORS } from "../../styles/variables";

interface IExplore {
  navigation: any;
}

const Explore: FC<IExplore> = ({ navigation }) => {
  const ref = useRef(null);

  useScrollToTop(ref);

  const { specialCategories, getSpecialCategories } = useContext(
    SpecialCategoryContext
  );
  const { topTenStories, getTopTenStories } = useContext(
    TopRecommendationContext
  );
  const { isLoading } = useContext(AxiosContext);

  useEffect(() => {
    if (!topTenStories.length) {
      getTopTenStories();
    }

    if (!specialCategories.content.length) {
      getSpecialCategories();
    }
  }, []);

  const navigateToStoryPage = (id: any) => {
    navigation.navigate("StoryReading", {
      screen: "Story",
      params: {
        storyId: id,
      },
    });
  };

  const renderItem = (itemToRender: any) => {
    return (
      <View key={itemToRender.index} style={styles.category}>
        <CategoryOrganism
          categoryName={itemToRender.item.name}
          stories={itemToRender.item.storySpecialCategories.map(
            (value: StorySpecialCategory) => {
              return value.story as Story;
            }
          )}
          onPress={navigateToStoryPage}
        />
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View>
        {getCoverStories()}
        {getStoriesPreview()}
        {getStoriesWithNumber()}
      </View>
    );
  };

  const getCoverStories = () => {
    return (
      <View>
        <StoriesCover
          stories={
            specialCategories.content.length
              ? specialCategories.content[0].storySpecialCategories.map(
                  (item) => {
                    return item.story as Story;
                  }
                )
              : []
          }
          onPress={navigateToStoryPage}
        ></StoriesCover>
      </View>
    );
  };

  const getStoriesPreview = () => {
    return (
      <View>
        {topTenStories.slice(0, 4).map((item, index) => {
          return (
            <View key={index} style={styles.story}>
              <StoryPreviewOrganism
                storyImage={item.story?.smallCoverImage?.imageUrl ?? ""}
                number={index + 1}
                chapterImages={
                  item.story?.chapters?.length
                    ? item.story.chapters[0].chapterImages
                        .slice(0, 4)
                        .map((images) => {
                          return images.imageUrl;
                        })
                    : []
                }
                onPress={navigateToStoryPage}
              />
            </View>
          );
        })}
      </View>
    );
  };

  const getStoriesWithNumber = () => {
    return (
      <ScrollView horizontal>
        {topTenStories.slice(4).map((item, index) => {
          return (
            <View key={index} style={styles.story}>
              <ImageWithNumberMolecule
                imageUrl={item.story?.smallCoverImage?.imageUrl ?? ""}
                number={index + 5}
                onPress={navigateToStoryPage}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderOrganism navigation={navigation} />
      {isLoading && <Loader></Loader>}
      <View style={styles.container}>
        <FlatList
          ref={ref}
          ListHeaderComponent={renderHeader}
          ListHeaderComponentStyle={{ flexGrow: 1 }}
          data={specialCategories.content}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.categoryContainer}
          onEndReached={getSpecialCategories}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    backgroundColor: COLORS.black,
  },
  story: {
    marginVertical: wp(2.5),
    marginLeft: wp(4.73),
  },
  category: {
    flex: 1,
    marginTop: wp(5),
    paddingHorizontal: wp(4.73),
  },
});

export default Explore;
