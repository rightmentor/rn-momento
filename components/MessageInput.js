import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import * as theme from '../constant/Theme';

const MessageInput = props => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Write Comment..." style={styles.inputBox}/>
            <MaterialIcons name="sentiment-satisfied-alt" size={30} color={theme.TextColor} style={styles.icon} />
            <Image source={require('../assets/send.png')} style={styles.sendImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: -20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sendImage: {
        width: 35,
        height: 35,
    },
    inputBox: {
        flexGrow: 3.5,
        marginLeft: 5,
        padding:5,
        outlineWidth: 0
    },
    icon: {
        flexGrow: 0.5
    }
});

export default MessageInput;