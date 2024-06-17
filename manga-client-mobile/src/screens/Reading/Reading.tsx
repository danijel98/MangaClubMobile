import { FC, useEffect, useState, useContext } from "react";

import { NavigationProp } from "@react-navigation/native";

import { API_URL } from "react-native-dotenv";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { Chapter, ChapterImage } from "../../models";

import { AxiosContext, NavigationContext, StoryContext } from "../../contexts";

import {
  BackHandler,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Loader, StoryImage } from "../../components/atoms";
import { ReadingHeaderOrganism } from "../../components/organisms";

import { getResourceNameFromAWSUrl } from "../../utils/awsUtils";

interface IReadingScreen {
  navigation: NavigationProp<any, any>;
  route: any;
}

const Reading: FC<IReadingScreen> = ({ route, navigation }) => {
  const { storyId, chapterId } = route.params;

  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState<boolean>(true);
  const [chapter, setChapter] = useState<Chapter>();
  const [images, setImages] = useState<ChapterImage[]>([]);
  const [numberOfShowedImages, setNumberOfShowedImages] = useState<number>(0);
  const step = 3;

  const { setFullScreen } = useContext(NavigationContext);
  const { story, getStory } = useContext(StoryContext);
  const { isLoading } = useContext(AxiosContext);

  const getChapter = () => {
    if (!story || !story.chapters?.length) {
      return;
    }

    const chapterIndex = story.chapters.findIndex(
      (chapter) => chapter.id === parseInt(chapterId)
    );

    if (chapterIndex === -1) {
      navigation.navigate("Home");
    }

    const newChapter = story.chapters[chapterIndex];

    setChapter(newChapter);
  };

  const loadMoreImages = function () {
    if (!chapter || !chapter.chapterImages) {
      return;
    }

    let newShowedItems = numberOfShowedImages + step;

    if (newShowedItems >= chapter.chapterImages.length) {
      newShowedItems = chapter.chapterImages.length;
    }

    setImages(
      images.concat(
        chapter.chapterImages.slice(numberOfShowedImages, newShowedItems)
      )
    );

    setNumberOfShowedImages(newShowedItems);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setChapter(undefined);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      setFullScreen(false);

      setShowHeaderAndFooter(true);

      return false;
    });

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", () => false);
    };
  }, []);

  useEffect(() => {
    if (storyId && !story) {
      getStory(parseInt(storyId));
    }
  }, [storyId]);

  useEffect(() => {
    if (chapterId) {
      getChapter();
    }
  }, [storyId, chapterId]);

  useEffect(() => {
    if (!chapter || !chapter.chapterImages) {
      return;
    }

    if (chapter.chapterImages?.length === 0) {
      return;
    }

    if (chapter.chapterImages.length <= numberOfShowedImages + step) {
      setNumberOfShowedImages(chapter.chapterImages.length);

      setImages(
        images.concat(
          chapter.chapterImages.slice(
            numberOfShowedImages,
            chapter.chapterImages.length
          )
        )
      );

      return;
    }

    setNumberOfShowedImages(numberOfShowedImages + step);

    setImages(chapter.chapterImages.slice(0, numberOfShowedImages + step));
  }, [chapter]);

  const renderItem = (itemToRender: any) => {
    return (
      <TouchableWithoutFeedback
        key={itemToRender.index}
        onPress={toggleHeaderAndFooter}
      >
        <View style={styles.image}>
          <StoryImage
            storyImage={`${API_URL}/api/resizer/image?width=520&height=1040&file=${getResourceNameFromAWSUrl(
              itemToRender.item.imageUrl
            )}`}
            style={{ borderRadius: 0 }}
            resizeMode="contain"
          ></StoryImage>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const toggleHeaderAndFooter = () => {
    setShowHeaderAndFooter(!showHeaderAndFooter);

    setFullScreen(showHeaderAndFooter);
  };

  return (
    <View>
      {isLoading && <Loader />}
      {showHeaderAndFooter && (
        <ReadingHeaderOrganism
          story={story}
          chapter={chapter}
          goBack={() => {
            navigation.canGoBack() && navigation.goBack();
            setFullScreen(false);
          }}
        ></ReadingHeaderOrganism>
      )}
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.orderNumber + ""}
        onEndReached={loadMoreImages}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp(100),
    height: hp(100),
  },
});
export default Reading;
