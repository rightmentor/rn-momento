import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import * as theme from "../../constant/Theme"
import CircleImage from '../ui/CircleImage';
import DefaultText from '../ui/DefaultText';

const CommentItem = props => {
    return (
        <View style={styles.container}>
            <CircleImage style={styles.profilePic} />
            <View style={styles.commentContent}>
                <View style={styles.commentHead}>
                    <DefaultText style={styles.user}>Melissa</DefaultText>
                    <DefaultText style={styles.time}>3 mins ago</DefaultText>
                </View>
                <DefaultText style={styles.comment}>It was a humorously perilous for both of us for, before we proceed further</DefaultText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 25
    },
    profilePic: {
        width: 25,
        height: 25,
    },
    commentContent: {
        marginLeft: 10,
        flex: 1
    },
    commentHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7
    },
    user: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    time: {
        fontSize: 10,
        fontWeight: 300,
        color: theme.LightTextColor
    },
    comment: {
        fontSize: 10,
    }

});

export default CommentItem;