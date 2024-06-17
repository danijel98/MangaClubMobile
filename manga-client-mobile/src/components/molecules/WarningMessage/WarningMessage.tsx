import { FC } from "react";

import { View, StyleSheet } from "react-native";

import CustomText from "../../atoms/Text/Text";

import { COLORS } from "../../../styles/variables";


interface IWarningMessage {
    text: string;
    backgroundColor?: string;
    textColor?: string;
    style?: any;

}

const WarningMessage: FC<IWarningMessage> = ({ text, style, textColor=COLORS.white, backgroundColor=COLORS.warning }) => {
    return (
        <View style={{ ...styles.container, ...style, backgroundColor:backgroundColor }}>
            <View style={{padding:5}}>
                <CustomText textAlign="center" color={textColor}>{text}</CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 6,

    },
});

export default WarningMessage;
