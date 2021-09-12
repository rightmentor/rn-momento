import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as theme from '../constant/Theme'

const CreateFeedButton = props => {
    return (
        <Pressable style={styles.button}>
            <Ionicons name="camera-outline" style={styles.icon} name="camera-outline" size={23} color={theme.WhiteColor} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: theme.PrimaryColor,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 50
    },
    icon: {

    }
})

export default CreateFeedButton;