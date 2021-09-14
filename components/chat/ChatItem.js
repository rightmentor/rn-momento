import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import * as theme from '../../constant/Theme';
import CircleImage from "../ui/CircleImage";
import DefaultText from "../ui/DefaultText";

const ChatItem = props => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={props.openChatDetails}>
            <View style={styles.profileImageContainer}>
                <CircleImage style={styles.profileImage} />
            </View>
            <View style={styles.messageContainer}>
                <View style={styles.userContainer}>
                    <DefaultText style={styles.userName}>Melissa Berry</DefaultText>
                    <DefaultText style={styles.time}>1h</DefaultText>
                </View>
                <DefaultText style={styles.message}>Hello, how are you?</DefaultText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: theme.BorderColor,
        alignItems: 'center'
    },
    profileImageContainer: {
        flexGrow: 0.1
    },
    profileImage: {
        width: 56,
        height: 56
    },
    messageContainer: {
        flexGrow: 0.9
    },
    userName: {
        fontSize: 12,
        fontWeight: '500',
        paddingBottom: 3
    },
    message: {
        fontSize: 10
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1
        // flex: 1,
        // flexGrow: 1,
        // alignItems: 'flex-end' 
    },
    time: {
        fontSize: 10,
        color: theme.LightTextColor
    }
});

export default ChatItem;