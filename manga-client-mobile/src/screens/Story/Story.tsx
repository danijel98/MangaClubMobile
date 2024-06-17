import { FC, useContext, useEffect } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Story, StorySpecialCategory } from "../../models";

import {
  AxiosContext,
  SpecialCategoryContext,
  StoryContext,
} from "../../contexts";

import { FlatList, StyleSheet, View } from "react-native";
import { CustomButton, CustomText, Loader } from "../../components/atoms";
import {
  CategoryOrganism,
  HeaderOrganism,
  StoryCoverDetails,
  StoryPreviewOrganism,
} from "../../components/organisms";

import { COLORS } from "../../styles/variables";

interface IStory {
  navigation: any;
  route: any;
}

const StoryScreen: FC<IStory> = ({ route, navigation }) => {
  const { storyId } = route.params;

  const { specialCategories, getSpecialCategories } = useContext(
    SpecialCategoryContext
  );
  const { isLoading } = useContext(AxiosContext);

  const { story, getStory } = useContext(StoryContext);

  useEffect(() => {
    if (storyId) {
      getStory(parseInt(storyId));
    }
  }, [storyId]);

  useEffect(() => {
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

  const navigateToChapterPage = (storyId: any, chapterId: any) => {
    navigation.navigate("Reading", {
      storyId,
      chapterId,
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
        {getStoryCover()}
        {getStoriesPreview()}
      </View>
    );
  };

  const getStoryCover = () => {
    return (
      <View>
        <StoryCoverDetails story={story}></StoryCoverDetails>
        <View style={{ width: "95%", alignSelf: "center", marginBottom: 15 }}>
          <CustomText numberOfLines={3} textAlign="justify">
            {story?.description}
          </CustomText>
        </View>
        <View style={{ width: "30%", alignSelf: "center", marginBottom: 15 }}>
          <CustomButton
            onPress={() =>
              navigation.navigate("Reading", {
                storyId: story.id,
                chapterId: story.chapters?.length ? story.chapters[0].id : 0,
              })
            }
            text="Read now"
            fontWeight="bold"
          ></CustomButton>
        </View>
      </View>
    );
  };

  const getStoriesPreview = () => {
    return (
      <View>
        {story.chapters?.map((item, index) => {
          return (
            <View key={index} style={styles.story}>
              <StoryPreviewOrganism
                storyImage={
                  item.chapterImages.length
                    ? item.chapterImages[0].imageUrl
                    : ""
                }
                number={index + 1}
                chapterImages={
                  item
                    ? item.chapterImages.slice(0, 4).map((images) => {
                        return images.imageUrl;
                      })
                    : []
                }
                onPress={() => navigateToChapterPage(story.id, item.id)}
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderOrganism allowBack={true} navigation={navigation} />
      {isLoading && <Loader></Loader>}
      <View style={styles.container}>
        <FlatList
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

export default StoryScreen;
