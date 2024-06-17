import { FC } from "react";

import { ActivityIndicator, StyleSheet } from "react-native";
import { View } from "react-native-animatable";

import { COLORS } from "../../../styles/variables";

const Loader: FC<{}> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.blue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1000,
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.black,
    opacity: 0.7,
  },
});

export default Loader;
