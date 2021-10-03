import React from "react";
import { View, Pressable, TextInput } from "react-native";

import { colors, globalStyles } from "../constant";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const MessageInput = props => {
    return (
        <View style={globalStyles.messageInputContainer}>
            <TextInput
                placeholder="Write Comments..."
                style={globalStyles.messageInput}
            />
            <FontAwesome5 name="smile" size={20} color={colors.secondary} />
            <Pressable style={globalStyles.sendButton}>
                <Ionicons name="ios-navigate-outline" size={20} color={colors.white}  />
            </Pressable>
        </View>
    );
}
export default MessageInput;