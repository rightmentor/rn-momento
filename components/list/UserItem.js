import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import * as theme from "../../constant/Theme"
import CircleImage from '../ui/CircleImage';
import DefaultText from '../ui/DefaultText';

const UserItem = props => {
    return (
        <View style={styles.container}>
            <CircleImage style={styles.profilePic} />
            <DefaultText style={styles.user}>Melissa</DefaultText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    profilePic: {
        width: 32,
        height: 32,
        borderRadius: 16
    },
    user: {
        fontSize: 12,
        marginLeft: 10,
        fontWeight: 'bold'
    }
});

export default UserItem;