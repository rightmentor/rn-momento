import React from "react";
import { View, StyleSheet } from "react-native";
import * as theme from "../../constant/Theme"
import CircleImage from "../ui/CircleImage"
import DefaultText from "../ui/DefaultText"

const FeedUserInfo = props => {
    return (
        <View style={styles.feedInfoContainer}>
            <CircleImage style={props.avtarStyle} />
            <View style={[styles.nameTimeContainer, props.nameContainerStyle]}>
                <DefaultText style={[styles.userName, props.nameStyle]}>Melissa Berry</DefaultText>
                <DefaultText style={[styles.lightText, props.infoStyle]}>10 mins ago</DefaultText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userName: {
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 3
    },
    lightText: {
        color: theme.LightTextColor,
        fontSize: 10,
        fontWeight: '300'
    },
    feedInfoContainer: {
        flexDirection: 'row'
    },
    nameTimeContainer: {
        marginLeft: 10
    }
});

export default FeedUserInfo;