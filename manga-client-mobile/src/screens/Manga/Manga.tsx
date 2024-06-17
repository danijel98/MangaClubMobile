import { FC, useContext, useEffect, useRef } from "react";

import { NavigationProp, useScrollToTop } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Story, StorySpecialCategory } from "../../models";

import { AxiosContext, SpecialCategoryContext } from "../../contexts";

import { FlatList, StyleSheet, View } from "react-native";
import { CustomButton, Loader } from "../../components/atoms";
import {
  CategoryOrganism,
  HeaderOrganism,
  StoriesCover,
} from "../../components/organisms";

interface IManga {
  navigation: NavigationProp<any, any>;
}

const Manga: FC<IManga> = ({ navigation }) => {
  const ref = useRef(null);

  useScrollToTop(ref);

  const { specialCategories, hasMore, getSpecialCategories } = useContext(
    SpecialCategoryContext
  );
  const { isLoading } = useContext(AxiosContext);

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
          }
          ListHeaderComponentStyle={{ flexGrow: 1 }}
          data={specialCategories.content}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          ListFooterComponent={renderFooter}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    flex: 1,
    marginTop: wp(5),
    paddingLeft: wp(4.73),
  },
  discoverMoreTitles: {
    alignSelf: "center",
    width: wp(50),
    marginVertical: wp(6),
  },
});

export default Manga;
