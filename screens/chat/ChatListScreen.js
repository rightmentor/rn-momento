import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatItem from '../../components/chat/ChatItem';

const ChatListScreen = props => {

    const openChatDetailsHandler = () => {
        props.navigation.navigate('chatDetails', {
            name: 'Melissa Berry'
        })
    }

    return (
        <View style={styles.screen}>
            <ChatItem openChatDetails={openChatDetailsHandler} />
            <ChatItem openChatDetails={openChatDetailsHandler} />
            <ChatItem openChatDetails={openChatDetailsHandler} />
            <ChatItem openChatDetails={openChatDetailsHandler} />
            <ChatItem openChatDetails={openChatDetailsHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default ChatListScreen;