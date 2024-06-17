import { FC, useRef } from "react";

import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//@ts-ignore
import ReactNativeAnimatedSearchbox from "react-native-animated-searchbox";
import { BackIcon, IconLogo } from "../../atoms";
import { SearchMolecule } from "../../molecules";

import { COLORS } from "../../../styles/variables";

interface IHeader {
  navigation: any;
  allowBack?: boolean;
}

const Header: FC<IHeader> = ({ navigation, allowBack = false }) => {
  const refSearchBox = useRef(ReactNativeAnimatedSearchbox);

  const closeSearchBox = () => {
    refSearchBox.current.close();
  };

  return (
    <View style={styles.headerRow}>
      <View style={styles.logoIcon}>
        <IconLogo />
      </View>
      {allowBack ? (
        <View>
          <BackIcon
            onPress={navigation.goBack}
            color={COLORS.white}
            size={wp(9)}
          ></BackIcon>
        </View>
      ) : (
        <></>
      )}
      <SearchMolecule allowBack={allowBack} />
      <TouchableOpacity onPress={navigation.openDrawer}>
        <View style={styles.logoIcon}>
          <IconLogo />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerRow: {
    width: wp(100),
    flexDirection: "row",
    backgroundColor: COLORS.black,
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? hp(2) : 0,
  },
  logoIcon: {
    width: wp(11),
    height: wp(11),
    marginHorizontal: wp(3),
  },
  searchRow: {
    flexDirection: "row",
    width: wp(50),
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
});

export default Header;
