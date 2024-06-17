import { FC, useContext, useEffect, useRef } from "react";

import { NavigationProp, useScrollToTop } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Story, StorySpecialCategory } from "../../models";

import {
  SpecialCategoryContext,
  AxiosContext,
  LibraryContext,
} from "../../contexts";

import { FlatList, StyleSheet, View } from "react-native";
import { CustomButton, CustomText, Loader } from "../../components/atoms";
import {
  CategoryOrganism,
  HeaderOrganism,
  LibraryOrganism,
} from "../../components/organisms";

import { COLORS, FONT_SIZES } from "../../styles/variables";

interface ILibrary {
  navigation: NavigationProp<any, any>;
}

const Library: FC<ILibrary> = ({ navigation }) => {
  const ref = useRef(null);

  useScrollToTop(ref);

  const { isLoading } = useContext(AxiosContext);
  const { library, getLibrary } = useContext(LibraryContext);
  const { specialCategories, hasMore, getSpecialCategories } = useContext(
    SpecialCategoryContext
  );

  const navigateToStoryPage = (storyId: number) => {
    navigation.navigate("StoryReading", {
      screen: "Story",
      params: {
        storyId,
      },
    });
  };

  useEffect(() => {
    getLibrary();

    if (!specialCategories.content.length) {
      getSpecialCategories();
    }
  }, []);

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

  const renderHeader = () => {
    return (
      <View style={{ backgroundColor: COLORS.black, marginTop: wp(2) }}>
        <LibraryOrganism onPress={navigateToStoryPage} library={library} />
        <View style={{ marginTop: wp(4) }}>
          <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
            Discover more titles
          </CustomText>
        </View>
      </View>
    );
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

  return (
    <View style={styles.container}>
      <HeaderOrganism navigation={navigation} />
      {isLoading && <Loader></Loader>}
      <View style={styles.container}>
        <FlatList
          ref={ref}
          ListHeaderComponent={renderHeader}
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

export default Library;
