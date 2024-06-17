import { FC, useContext, useEffect } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { NavigationProp } from "@react-navigation/native";

import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { CustomButton, IconWithLogoAndText } from "../../components/atoms";
import { NeedHelpOrganism } from "../../components/organisms";

import { COLORS, FONT_SIZES } from "../../styles/variables";
import { HelpCentreContext } from "../../contexts";

import background from "../../assets/images/background.png";

interface INeedHelp {
  navigation: NavigationProp<any, any>;
}

const NeedHelp: FC<INeedHelp> = ({ navigation }) => {

  const { questionsAnswers, getQuestionsAndAnswers } =
    useContext(HelpCentreContext);

  useEffect(() => {
    getQuestionsAndAnswers();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
        <View style={styles.logo}>
          <IconWithLogoAndText></IconWithLogoAndText>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <NeedHelpOrganism questionAnswers={questionsAnswers}></NeedHelpOrganism>
        </View>
        <View style={styles.buttonRow}>
          <CustomButton
            text="Back"
            color={COLORS.red}
            size={FONT_SIZES.l}
            fontWeight="bold"
            onPress={() => navigation.goBack()}>
          </CustomButton>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingTop: wp(10),
  },
  logo: {
    width: wp(62),
    height: wp(28.35),
    alignSelf: "center",
  },
  header: {
    padding: wp(3),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    alignSelf: "center",
    width: wp(25),
    marginVertical: wp(4),
  }
});

export default NeedHelp;
