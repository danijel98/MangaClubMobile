import { transform } from "@babel/core";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS, FONT_SIZES } from "../../../styles/variables";
import { CustomText, HR } from "../../atoms";

const Timeline: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainLine}>
        <HR thickness={4} color={COLORS.red}></HR>
      </View>
      <View style={{ ...styles.verticalLine, ...styles.verticalLine1 }}>
        <HR thickness={4} color={COLORS.red}></HR>
      </View>
      <View style={{ ...styles.verticalLine, ...styles.verticalLine2 }}>
        <HR thickness={4} color={COLORS.red}></HR>
      </View>
      <View style={{ ...styles.verticalLine, ...styles.verticalLine3 }}>
        <HR thickness={4} color={COLORS.red}></HR>
      </View>
      <View style={{ ...styles.verticalLine, ...styles.verticalLine4 }}>
        <HR thickness={4} color={COLORS.red}></HR>
      </View>
      <View style={{ ...styles.verticalLine, ...styles.verticalLine5 }}>
        <HR thickness={4} color={COLORS.red}></HR>
      </View>
      <View style={styles.text1}>
        <CustomText fontSize={FONT_SIZES.m}>
          iOS & android applications
        </CustomText>
      </View>
      <View style={styles.text2}>
        <CustomText fontSize={FONT_SIZES.m}>
          Recommendations just for you
        </CustomText>
      </View>
      <View style={styles.text3}>
        <CustomText fontSize={FONT_SIZES.m}>
          Exclusive Q&A's with artists
        </CustomText>
      </View>
      <View style={styles.text4}>
        <CustomText fontSize={FONT_SIZES.m}>Art & NFT's</CustomText>
      </View>
      <View style={styles.text5}>
        <CustomText fontSize={FONT_SIZES.m}>Indie anime</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    position: "relative",
  },
  mainLine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  verticalLine: {
    position: "absolute",
    width: "5%",
    transform: [{ rotate: "90deg" }],
  },
  verticalLine1: {
    top: -7,
    left: "16.66%",
  },
  verticalLine2: {
    top: 7,
    left: "33.33%",
  },
  verticalLine3: {
    top: -7,
    left: "50%",
  },
  verticalLine4: {
    top: 7,
    left: "66.66%",
  },
  verticalLine5: {
    top: -7,
    left: "83.33%",
  },
  text1: {
    position: "absolute",
    top: -50,
    left: "6.66%",
    width: "26%",
  },
  text2: {
    position: "absolute",
    top: 20,
    left: "18.5%",
    width: "36%",
  },
  text3: {
    position: "absolute",
    top: -50,
    left: "38%",
    width: "30%",
  },
  text4: {
    position: "absolute",
    top: 20,
    left: "51.5%",
    width: "36%",
  },
  text5: {
    position: "absolute",
    top: -35.5,
    left: "68%",
    width: "36%",
  },
});
export default Timeline;
