import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import * as Animatable from "react-native-animatable";

import { StyleSheet, View } from "react-native";
import { CustomText, HR } from "../../atoms";
import { AcordionMolecule } from "../../molecules";

import { QuestionAnswer } from "../../../models";

import { COLORS, FONT_SIZES } from "../../../styles/variables";

interface INeedHelp {
  questionAnswers: QuestionAnswer[];
}

const NeedHelp: FC<INeedHelp> = ({ questionAnswers }) => {
  const renderHeader = (
    content: QuestionAnswer,
    index: number,
    isActive: boolean,
    sections: QuestionAnswer[]
  ) => {
    return (
      <View>
        <Animatable.View duration={100} style={styles.header}>
          <View
            style={{
              paddingVertical: wp(3),
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CustomText fontSize={FONT_SIZES.l} fontWeight="bold">
              {content.question}
            </CustomText>
          </View>
        </Animatable.View>
        {!isActive ? <HR></HR> : <></>}
      </View>
    );
  };

  const renderContent = (
    content: QuestionAnswer,
    index: number,
    isActive: boolean,
    sections: QuestionAnswer[]
  ) => {
    return (
      <View>
        <Animatable.View duration={100}>
          <Animatable.Text
            style={{ textAlign: "center", paddingVertical: wp(3) }}
          >
            <CustomText>{content.answer}</CustomText>
          </Animatable.Text>
        </Animatable.View>
        {isActive ? <HR></HR> : <></>}
      </View>
    );
  };

  return (
    <View style={styles.formContainer}>
      <View style={{ alignSelf: "center", width: wp(85) }}>
        <View style={{ paddingVertical: wp(3) }}>
          <CustomText fontSize={FONT_SIZES.xxl} fontWeight="bold">
            FAQs
          </CustomText>
        </View>
        <HR></HR>
      </View>
      <AcordionMolecule
        data={questionAnswers}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
      <View style={{ marginTop: wp(8), width: wp(85), alignSelf: "center" }}>
        <CustomText fontWeight="bold" fontSize={FONT_SIZES.xxl}>
          Need more Help?
        </CustomText>
        <CustomText
          fontWeight="bold"
          color={COLORS.red}
          fontSize={FONT_SIZES.xxl}
        >
          Contact support
        </CustomText>
      </View>
      <View style={{ marginTop: wp(6), width: wp(85), alignSelf: "center" }}>
        <CustomText fontSize={FONT_SIZES.l}>
          You can email contact@themangaclub.com for any support requests! We
          will be launching our help centre in winter 2022.
        </CustomText>
      </View>
      <View style={{ marginTop: wp(6), width: wp(85), alignSelf: "center" }}>
        <CustomText fontSize={FONT_SIZES.l}>
          Please only send one email per request and wait up to 72 hours for a
          response before contacting us again.
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: wp(100),
    alignContent: "center",
    paddingVertical: wp(8.58),
    backgroundColor: COLORS.lightBlack,
    opacity: 0.9,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 6,
  },
  header: {
    padding: wp(3),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NeedHelp;
