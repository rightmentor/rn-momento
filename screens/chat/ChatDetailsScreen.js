import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import * as theme from '../../constant/Theme';
import MessageInput from '../../components/MessageInput';
import LeftMessage from '../../components/chat/LeftMessage';
import RightMessage from '../../components/chat/RightMessage';
import DateDivider from '../../components/chat/DateDivider';

const ChatDetailsScreen = props => {

    return (
        <View style={styles.screen}>
            <ScrollView style={styles.container}>
                <DateDivider></DateDivider>
                <LeftMessage></LeftMessage>
                <RightMessage></RightMessage>
                <DateDivider></DateDivider>
                <LeftMessage></LeftMessage>
                <RightMessage></RightMessage>
                <DateDivider></DateDivider>
                <LeftMessage></LeftMessage>
                <RightMessage></RightMessage>
                <DateDivider></DateDivider>
                <LeftMessage></LeftMessage>
                <RightMessage></RightMessage>
                <DateDivider></DateDivider>
                <LeftMessage></LeftMessage>
                <RightMessage></RightMessage>
            </ScrollView>
            <View style={styles.inputBoxContainer}>
                <MessageInput />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    inputBoxContainer: {
        
    },
    rightMessage: {
        fontSize: 10,
        alignItems: 'flex-end',
        borderWidth: 1,
        borderColor: theme.PrimaryColor,
        borderRadius: 5
    },
    leftMessage: {
        fontSize: 10,
        borderWidth: 1,
        borderColor: theme.TextColor,
        borderRadius: 5
    }
});

export default ChatDetailsScreen;