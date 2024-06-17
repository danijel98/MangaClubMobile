import { FC } from "react";

import { NavigationProp } from "@react-navigation/native";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import {
  CustomButton,
  CustomText,
  DiscordIcon,
  HR,
  InstagramIcon,
  TwitterIcon,
} from "../../components/atoms";
import { TimelineMolecule } from "../../components/molecules";
import { GuestHeaderOrganism } from "../../components/organisms";
import { Video } from "expo-av";

import { COLORS, FONT_SIZES } from "../../styles/variables";

import homeImage5 from "../../assets/images/homeImage5.png";
import homeImage4 from "../../assets/images/homeImage4.png";
import homeImage3 from "../../assets/images/homeImage3.png";
import homeImage2 from "../../assets/images/homeImage2.png";
import homeImage1 from "../../assets/images/homeImage1.png";

interface IGuestHome {
  navigation: NavigationProp<any, any>;
}

const GuestHome: FC<IGuestHome> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={{ ...styles.content, height: wp(20) }}>
        <GuestHeaderOrganism navigation={navigation}></GuestHeaderOrganism>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View
            style={{ width: wp(55), alignSelf: "center", marginTop: wp(5) }}
          >
            <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
              Unlimited manga, anytime and anywhere.
            </CustomText>
          </View>
          <View
            style={{ marginTop: wp(5), width: wp(85), alignSelf: "center" }}
          >
            <CustomText>
              Unlimited access to 1000s of chapters across 20+ genres, with new
              titles added every week.
            </CustomText>
          </View>
          <View style={{ flex: 1, width: "100%" }}>
            <Video
              source={{
                uri: "https://cdn.animaapp.com/projects/624313956a6fb03c3f771d36/files/mc-final-2.mp4",
              }}
              resizeMode="contain"
              style={styles.video}
              isLooping
              shouldPlay
            ></Video>
          </View>
          <View style={styles.getAccessButton}>
            <CustomButton
              size={FONT_SIZES.xl}
              fontWeight="bold"
              text="Get Access"
              onPress={() => navigation.navigate("Registration")}
            />
          </View>
          <View style={{ marginTop: wp(15) }}>
            <CustomText fontSize={FONT_SIZES.xl} fontWeight="bold">
              ALWAYS AD FREE - NEW STORIES WEEKLY CANCEL ANYTIME - NO EXTRA FEES
            </CustomText>
          </View>
        </View>
        <View style={{ marginVertical: wp(6) }}>
          <HR color={COLORS.darkGrey} thickness={10} />
        </View>
        <View style={styles.content}>
          <CustomText
            color={COLORS.red}
            fontSize={FONT_SIZES.xxl}
            fontWeight="bold"
          >
            Unlimited reading, one cost.
          </CustomText>
          <View style={{ marginTop: wp(5) }}>
            <CustomText>
              Paying per content is old news. Read unlimited manga 24/7 on any
              device, without ever paying more.
            </CustomText>
          </View>
          <View style={styles.image1}>
            <Image style={styles.image} source={homeImage1} />
          </View>
          <View style={{ marginTop: wp(10) }}>
            <CustomText fontSize={FONT_SIZES.l} fontWeight="bold">
              24/7 ACCESS ON ANY DEVICE
            </CustomText>
            <CustomText fontSize={FONT_SIZES.l} fontWeight="bold">
              -
            </CustomText>
            <CustomText fontSize={FONT_SIZES.l} fontWeight="bold">
              MAINSTREAM AND EXCLUSIVE HD CONTENT
            </CustomText>
            <CustomText fontSize={FONT_SIZES.l} fontWeight="bold">
              -
            </CustomText>
            <CustomText fontSize={FONT_SIZES.l} fontWeight="bold">
              UNLIMITED ACCESS TO 1000S OF CHAPTERS
            </CustomText>
          </View>
        </View>
        <View style={{ marginVertical: wp(6) }}>
          <HR color={COLORS.darkGrey} thickness={10} />
        </View>
        <View style={styles.content}>
          <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
            The biggest titles and indie stories.
          </CustomText>
          <View style={{ marginTop: wp(5) }}>
            <CustomText>
              Don't limit yourself to a couple of stories. Read some of the most
              popular manga titles, as well as indie content from up and coming
              artists.
            </CustomText>
          </View>
          <View style={styles.image2}>
            <Image style={styles.image} source={homeImage2} />
          </View>
        </View>
        <View style={{ marginVertical: wp(6) }}>
          <HR color={COLORS.darkGrey} thickness={10} />
        </View>
        <View style={styles.content}>
          <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
            Read every genre in one place.
          </CustomText>
          <View style={{ marginTop: wp(5) }}>
            <CustomText>
              Forget switching between readers, read every genre on one app
              including action, romance, hentai, ecchi, comedy, fantasy, horror
              and more!
            </CustomText>
          </View>
          <View style={styles.image3}>
            <Image style={styles.image} source={homeImage3} />
          </View>
        </View>
        <View style={{ marginVertical: wp(6) }}>
          <HR color={COLORS.darkGrey} thickness={10} />
        </View>
        <View style={styles.content}>
          <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
            Unlimited content without any effort.
          </CustomText>
          <View style={{ marginTop: wp(5) }}>
            <CustomText>
              Read the manga you want, when you want, on any device... with
              unlimited access to 1000s of chapters and new content added
              weekly.
            </CustomText>
          </View>
          <View style={styles.image4}>
            <Image style={styles.image} source={homeImage4} />
          </View>
        </View>
        <View style={{ marginVertical: wp(6) }}>
          <HR color={COLORS.darkGrey} thickness={10} />
        </View>
        <View style={styles.content}>
          <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
            Support artists!
          </CustomText>
          <View style={{ marginTop: wp(5) }}>
            <CustomText>
              We help creators gain the exposure they deserve without having any
              say over what they create. The days of having to hunt for new top
              tier content are over.
            </CustomText>
          </View>
          <View style={styles.image5}>
            <Image style={styles.image} source={homeImage5} />
          </View>
        </View>
        <View style={{ marginVertical: wp(6) }}>
          <HR color={COLORS.darkGrey} thickness={10} />
        </View>
        <View style={{ ...styles.content, alignItems: "center" }}>
          <CustomText
            color={COLORS.red}
            fontSize={FONT_SIZES.xxl}
            fontWeight="bold"
          >
            Why MangaClub?
          </CustomText>
          <View style={{ marginTop: wp(5), width: wp(85) }}>
            <CustomText>
              We grew tired of paying per chapter (so expensive) and switching
              between many (many) apps just to get our daily dose of manga,
              webcomics and art.
            </CustomText>
          </View>
          <View style={{ marginTop: wp(5), width: wp(85) }}>
            <CustomText>
              Our mission? All the content you want in one place, for one small
              cost, with content from up and coming artists that you would never
              discover on mainstream platforms.
            </CustomText>
          </View>
          <View style={{ marginVertical: wp(10) }}>
            <CustomText color={COLORS.red} addFontStyle>
              Our manga reader is just the start.
            </CustomText>
          </View>
          <View style={{ width: "100%", marginVertical: wp(15) }}>
            <TimelineMolecule />
          </View>
          <View style={{ ...styles.getAccessButton, marginTop: wp(10) }}>
            <CustomButton
              size={FONT_SIZES.xl}
              fontWeight="bold"
              text="Get Access"
              onPress={() => navigation.navigate("Registration")}
            />
          </View>
        </View>
        <View style={{ marginVertical: wp(6) }}>
          <HR color={COLORS.darkGrey} thickness={10} />
        </View>
        <View style={styles.content}>
          <View style={styles.iconsContainer}>
            <TouchableHighlight
              onPress={() => Linking.openURL("https://twitter.com/MangaClubCo")}
            >
              <View style={{ width: wp(10), height: wp(10) }}>
                <TwitterIcon />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() =>
                Linking.openURL(
                  "https://discord.com/invite/b4BgD7WZzW?utm_source=Discord&utm_medium=Discord&utm_campaign=Invite"
                )
              }
            >
              <View style={{ width: wp(10), height: wp(10) }}>
                <DiscordIcon />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() =>
                Linking.openURL("https://www.instagram.com/mangaclubco/")
              }
            >
              <View style={{ width: wp(10), height: wp(10) }}>
                <InstagramIcon />
              </View>
            </TouchableHighlight>
          </View>
          <View
            style={{
              marginVertical: wp(10),
              width: wp(70),
              alignSelf: "center",
            }}
          >
            <CustomText addFontStyle>
              ©2022 MangaClub. All rights reserved. Terms of service. Privacy
              Policy.
            </CustomText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.lightBlack,
  },
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    height: wp(70),
  },
  getAccessButton: {
    alignSelf: "center",
    width: wp(40),
  },
  content: { paddingHorizontal: wp(4), alignItems: "center" },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(80),
    height: wp(10),
    marginTop: wp(5),
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  image5: {
    width: "100%",
    height: wp(44),
    marginTop: wp(5),
  },
  image4: {
    width: "100%",
    height: wp(65),
    marginTop: wp(5),
  },
  image3: {
    width: "90%",
    height: wp(65),
    marginTop: wp(5),
  },
  image2: {
    width: "90%",
    height: wp(65),
    marginTop: wp(5),
  },
  image1: {
    width: "100%",
    height: wp(35),
    marginTop: wp(5),
  },
});

export default GuestHome;
