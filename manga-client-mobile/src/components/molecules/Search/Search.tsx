import { FC, useRef, useState } from "react";

import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ReactNativeAnimatedSearchbox from "../../../../libs/AnimatedSearchBox/index.js";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import { CloseIcon } from "../../atoms";

import { COLORS } from "../../../styles/variables";




interface ISearch {
    allowBack?: boolean;
  }
const Search: FC<ISearch> = ({allowBack=false}) => {

    const [visible, setVisible] = useState(false);
    const refSearchBox = useRef(ReactNativeAnimatedSearchbox)
    const closeSearchBox = () => {
        (refSearchBox.current as any as ReactNativeAnimatedSearchbox).close();
    }

    const handleShow = () => {
        setVisible(true)
    }

    const handleHide = () => {
        setVisible(false)
    }

    return (
        <View style={[styles.headerRow,{width:allowBack?wp(57):wp(66)}]}>
            <View style={styles.searchRow}>
                <View style={{width:allowBack?wp(47):wp(54)}}>
                    <ReactNativeAnimatedSearchbox
                        //@ts-ignore
                        ref={refSearchBox}
                        placeholder={"Titles, genres, artists..."}
                        height={wp(11)}
                        borderRadius={10}
                        searchIconSize={wp(9)}
                        onOpening={handleShow}
                        onClosing={handleHide}
                        focusAfterOpened={true}
                        fontSize={13}
                        placeholderTextColor={COLORS.white}
                        searchIconColor={COLORS.white}
                        backgroundColor={COLORS.transparent}
                        color={COLORS.white}
                        shadowColor={"#fff"}
                        borderWidth={1}
                        borderColor={"#232323"}
                    />
                </View>
                {visible ?
                    <View style={styles.close}>
                        <TouchableOpacity
                            onPress={closeSearchBox}>
                            <CloseIcon size={wp(9)} color="white" />
                        </TouchableOpacity>
                    </View> : <></>}
            </View>
        </View>
    );
};

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");


const styles = StyleSheet.create({
    headerRow: {
        flexDirection: "row",
        height: wp(18),
        backgroundColor: COLORS.black,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    searchRow: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "100%",
    },
    close: {
        alignItems: "center",
        justifyContent: "center"
    },
    closeIcon: {
        color: COLORS.white,
    },

});

export default Search;
