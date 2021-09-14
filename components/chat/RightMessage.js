import React from "react";
import { View, StyleSheet } from "react-native";

import * as theme from '../../constant/Theme'
import CircleImage from "../ui/CircleImage";
import DefaultText from "../ui/DefaultText";

const RightMessage = props => {
    return (
        <View style={styles.container}>
            <View style={styles.messageContainer} >
                <DefaultText style={styles.message}>Hello Hello Hello HelloHello HelloHello HelloHello HelloHello HelloHello HelloHello HelloHello Hello </DefaultText>
                <DefaultText style={styles.time}>1:23 PM</DefaultText>
            </View>
            <CircleImage style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
        flexDirection: 'row',
        marginLeft: 30,
        marginBottom: 15
    },
    image: {
        width: 32,
        height: 32
    },
    messageContainer: {
        marginRight: 8,
        flex: 1,
        alignItems: "flex-end"
    },
    message: {
        fontSize: 10,
        borderWidth: 1,
        borderColor: theme.PrimaryColor,
        borderRadius: 8,
        padding: 5,
        marginBottom: 3,
        flexWrap: 'wrap'
    },
    time: {
        fontSize: 8,
        fontWeight: '300',
        color: theme.LightTextColor,
        marginRight: 5,
        alignItems: 'flex-end'
    }
});

export default RightMessage;