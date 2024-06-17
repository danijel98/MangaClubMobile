import { FC } from "react";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Story } from "../../../models";

import { StyleSheet, View } from "react-native";
import { CustomButton, CustomText } from "../../atoms";
import { StoryCoverWithShadow } from "../../molecules";
import { FONT_SIZES } from "../../../styles/variables";

interface IStoryCover {
    story?: Story;
}

const StoryCoverDetails: FC<IStoryCover> = ({ story }) => {
    return (
        <View style={styles.container}>
            <View style={styles.storyCoverContainer}>
                <StoryCoverWithShadow story={story}></StoryCoverWithShadow>
            </View>
            <View style={styles.title}>
                <CustomText  numberOfLines={2} textShadowOffset={{ height: 2 }} textShadowRadius={20} fontWeight="bold" fontSize={FONT_SIZES.xxxl}>{story?.title?.toUpperCase()}</CustomText>
            </View>
            <View style={styles.informationRow}>
                <CustomText>
                    {story?.genres?.filter((elem, index) => index < 1).map((genre, index) => {
                        if (!story.genres) {
                            return;
                        } else {
                            return genre.name;
                        }
                    })}
                </CustomText>
                <CustomText>
                    {story?.ageRating?.code}
                </CustomText>
                <CustomText>
                    {2022}
                </CustomText>
                <CustomText>
                    {story?.chapters?.length + " Chapters"}
                </CustomText>
            </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        position: "relative",
    },
    storyCoverContainer: {
        height: 402,
    },
    title: {
        position: "absolute",
        bottom: "15%",
        width: "95%",
        alignSelf: "center",
        zIndex: 3,
    },
    informationRow: {
        position: "absolute",
        bottom: "5%",
        width: "95%",
        alignSelf: "center",
        zIndex: 3,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    description: {
        position: "absolute",
        bottom: "0%",
        width: "95%",
        alignSelf: "center",
        zIndex: 3,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    }
});

export default StoryCoverDetails;
