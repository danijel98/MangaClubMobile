import { FC, useContext } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { PreferenceContext } from "../../contexts";

import { ImageBackground, StyleSheet, View } from "react-native";
import { CustomButton, CustomText } from "../../components/atoms";
import { StoryPreferenceMolecule } from "../../components/molecules";

import { COLORS, FONT_SIZES } from "../../styles/variables";

import background from "../../assets/images/background.png";

const preferences = [
  { name: "Naruto", image: require("../../assets/images/slika1.jpeg") },
  { name: "DragonBall Z", image: require("../../assets/images/slika2.jpeg") },
  {
    name: "High School DxD",
    image: require("../../assets/images/slika3.jpeg"),
  },
  {
    name: "Attack on Titan",
    image: require("../../assets/images/slika4.jpeg"),
  },
  { name: "Black Clover", image: require("../../assets/images/slika5.jpeg") },
  { name: "One Piece", image: require("../../assets/images/slika6.jpeg") },
  { name: "Bleach", image: require("../../assets/images/slika7.jpeg") },
  {
    name: "That Time I Got Reincarnated As A Slime",
    image: require("../../assets/images/slika8.jpeg"),
  },
  {
    name: "The Rising of the Shield Hero",
    image: require("../../assets/images/slika9.jpeg"),
  },
  { name: "Berserk", image: require("../../assets/images/slika10.jpeg") },
  { name: "Overlord", image: require("../../assets/images/slika11.jpeg") },
  { name: "Re:ZERO", image: require("../../assets/images/slika12.jpeg") },
  { name: "Free!", image: require("../../assets/images/slika13.png") },
  { name: "Demon Slayer", image: require("../../assets/images/slika14.jpeg") },
  { name: "Hellsing", image: require("../../assets/images/slika15.jpg") },
  {
    name: "My Hero Academia",
    image: require("../../assets/images/slika16.jpg"),
  },
  {
    name: "JoJo's Bizarre Adventure",
    image: require("../../assets/images/slika17.jpg"),
  },
  { name: "Castlevania", image: require("../../assets/images/slika18.jpg") },
  { name: "Super Crooks", image: require("../../assets/images/slika19.jpeg") },
  {
    name: "The Daily Life of the Immortal King",
    image: require("../../assets/images/slika20.jpeg"),
  },
  { name: "Kakegurui", image: require("../../assets/images/slika21.jpeg") },
  {
    name: "B: The Beginning",
    image: require("../../assets/images/slika22.jpeg"),
  },
  { name: "Yasuke", image: require("../../assets/images/slika23.jpeg") },
  { name: "Dawin's Game", image: require("../../assets/images/slika24.webp") },
  {
    name: "Dota: Dragon's Blood",
    image: require("../../assets/images/slika25.jpeg"),
  },
  {
    name: "The Promised Neverland",
    image: require("../../assets/images/slika26.jpeg"),
  },
  {
    name: "The Seven Deadly Sins",
    image: require("../../assets/images/slika27.webp"),
  },
  {
    name: "The Disastrous Life of Saiki K.",
    image: require("../../assets/images/slika28.jpeg"),
  },
  { name: "Tokyo Ghoul", image: require("../../assets/images/slika29.jpeg") },
  { name: "Shaman King", image: require("../../assets/images/slika30.webp") },
  {
    name: "Great Pretender",
    image: require("../../assets/images/slika31.webp"),
  },
  {
    name: "Violet Evergarden",
    image: require("../../assets/images/slika32.jpeg"),
  },
  { name: "Black Butler", image: require("../../assets/images/slika33.jpeg") },
  { name: "Kengan Ashura", image: require("../../assets/images/slika34.jpg") },
  { name: "Kuromukuro", image: require("../../assets/images/slika35.jpg") },
  {
    name: "Ghost in the Shell: SAC_2045",
    image: require("../../assets/images/slika36.jpeg"),
  },
  {
    name: "Neon Genesis Evangelion",
    image: require("../../assets/images/slika37.jpg"),
  },
  { name: "Lore Olympus", image: require("../../assets/images/slika38.jpg") },
  { name: "unOrdinary", image: require("../../assets/images/slika39.jpg") },
  { name: "True Beauty", image: require("../../assets/images/slika40.jpg") },
  {
    name: "My Giant Nerd Boyfriend",
    image: require("../../assets/images/slika41.jpg"),
  },
  { name: "Let's Play", image: require("../../assets/images/slika42.jpg") },
  { name: "I Love Yoo", image: require("../../assets/images/slika43.jpg") },
  { name: "Bluechair", image: require("../../assets/images/slika44.jpg") },
  { name: "Tower of God", image: require("../../assets/images/slika45.jpg") },
  {
    name: "Boyfriend of the Dead",
    image: require("../../assets/images/slika46.jpg"),
  },
  { name: "Age Matters", image: require("../../assets/images/slika47.jpg") },
  {
    name: "Mage & Demon Queen",
    image: require("../../assets/images/slika48.jpg"),
  },
  { name: "SubZero", image: require("../../assets/images/slika49.jpeg") },
  { name: "Sweet Home", image: require("../../assets/images/slika50.webp") },
  {
    name: "Castle Swimmer",
    image: require("../../assets/images/slika51.jpeg"),
  },
  {
    name: "Cursed Princess Club",
    image: require("../../assets/images/slika52.webp"),
  },
  {
    name: "Love Advice from the Great Duke of Hell",
    image: require("../../assets/images/slika53.jpeg"),
  },
  {
    name: "Freaking Romance",
    image: require("../../assets/images/slika54.webp"),
  },
  {
    name: "My Deepest Secret",
    image: require("../../assets/images/slika55.jpeg"),
  },
  { name: "SAVE ME", image: require("../../assets/images/slika56.webp") },
  { name: "Edith", image: require("../../assets/images/slika57.jpeg") },
  { name: "LUFF", image: require("../../assets/images/slika58.webp") },
  { name: "Gourmet Hound", image: require("../../assets/images/slika59.png") },
  {
    name: "The Wrath & the Dawn",
    image: require("../../assets/images/slika60.webp"),
  },
];

const Preferences: FC<{}> = () => {
  const { selectedPreferences } = useContext(PreferenceContext);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.contentContainer}>
          <View style={styles.logoutContainer}>
            <CustomButton
              text="Log out"
              color={COLORS.red}
              onPress={() => {}}
            ></CustomButton>
          </View>
          <View style={{ marginTop: wp(11) }}>
            <CustomText
              color={COLORS.red}
              fontWeight="bold"
              fontSize={FONT_SIZES.xxl}
            >
              Welcome to MangaClub!
            </CustomText>
          </View>
          <View style={{ marginTop: wp(2.51) }}>
            <CustomText fontWeight="bold" fontSize={FONT_SIZES.xxl}>
              Help Us Show You Content You Will Love.
            </CustomText>
          </View>
          <View style={{ marginTop: wp(6) }}>
            <CustomText>
              Select your favorite mainstream titles so we know which type of
              manga to suggest for you.
            </CustomText>
          </View>
          <View style={styles.nextButton}>
            <CustomButton text="Next"></CustomButton>
          </View>
          <View style={{ marginTop: wp(2) }}>
            <CustomText>{selectedPreferences.length} selected</CustomText>
          </View>
          <View style={styles.storiesContainer}>
            <StoryPreferenceMolecule stories={preferences} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    opacity: 0.7,
    paddingHorizontal: wp(3),
  },
  logoutContainer: {
    width: wp(25),
    marginTop: wp(17),
    marginRight: wp(7),
    alignSelf: "flex-end",
  },
  nextButton: {
    marginTop: wp(6.28),
    width: wp(17.83),
    alignSelf: "center",
  },
  storiesContainer: {
    flex: 1,
    marginTop: wp(5),
  },
});

export default Preferences;
