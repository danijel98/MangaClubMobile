import { FC, useContext, useEffect, useRef } from "react";

import { NavigationProp, useScrollToTop } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Story, StorySpecialCategory } from "../../models";

import {
  SpecialCategoryContext,
  TopRecommendationContext,
  AxiosContext,
} from "../../contexts";

import { FlatList, StyleSheet, View } from "react-native";
import {
  CategoryOrganism,
  HeaderOrganism,
  MangaCarouselOrganism,
} from "../../components/organisms";
import { CustomButton, Loader } from "../../components/atoms";

import { COLORS } from "../../styles/variables";

interface IHome {
  navigation: NavigationProp<any, any>;
}

const Home: FC<IHome> = ({ navigation }) => {
  const ref = useRef(null);

  useScrollToTop(ref);

  const { specialCategories, hasMore, getSpecialCategories } = useContext(
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

  const renderFooter = () => {
    return !hasMore ? (
      <View style={styles.discoverMoreTitles}>
        <CustomButton
          text="Discover more titles"
          onPress={() => navigation.navigate("Explore")}
        />
      </View>
    ) : (
      <></>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderOrganism navigation={navigation} />
      {isLoading && <Loader></Loader>}
      <View style={styles.container}>
        <FlatList
          ref={ref}
          ListHeaderComponent={
            <View style={{ backgroundColor: COLORS.black }}>
              <MangaCarouselOrganism
                navigateToStoryPage={navigateToStoryPage}
                stories={topTenStories}
              />
            </View>
          }
          ListHeaderComponentStyle={{
            paddingHorizontal: wp(0),
            backgroundColor: COLORS.black,
          }}
          ListFooterComponent={renderFooter}
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
  category: {
    flex: 1,
    marginTop: wp(5),
    paddingHorizontal: wp(4.73),
  },
  discoverMoreTitles: {
    alignSelf: "center",
    width: wp(50),
    marginVertical: wp(6),
  },
});

export default Home;
