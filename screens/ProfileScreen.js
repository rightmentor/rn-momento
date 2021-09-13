import React from 'react';
import { View, StyleSheet } from 'react-native';

import * as theme from '../constant/Theme';
import CreateFeedButton from '../components/CreateFeedButton';
import FeedUserInfo from '../components/feed/FeedUserInfo';
import DefaultText from '../components/ui/DefaultText';
import MomentsList from '../components/list/MomentsList';

const ProfileScreen = props => {

    return (
        <View style={styles.screen}>
            <View style={styles.profileContainer}>
                <FeedUserInfo
                    avtarStyle={styles.profileImage}
                    nameStyle={styles.name}
                    infoStyle={styles.info}
                    nameContainerStyle={styles.nameContainer}
                />
            </View>
            <View style={styles.container}>
                <DefaultText style={styles.header}>About</DefaultText>
                <DefaultText style={styles.aboutContent}>So strongly and metaphysically did I conceive of my situation then, that while ear.</DefaultText>
            </View>
            <View style={styles.container}>
                <DefaultText style={styles.header}>Stats</DefaultText>
                <View style={styles.stateContent}>
                    <View style={styles.statsMoments}>
                        <DefaultText style={styles.statsNumber}>8</DefaultText>
                        <DefaultText style={styles.statsInfo}>Moments</DefaultText>
                    </View>
                    <View style={styles.statsFollower}>
                        <DefaultText style={styles.statsNumber}>16</DefaultText>
                        <DefaultText style={styles.statsInfo}>Followers</DefaultText>
                    </View>
                    <View style={styles.statsFollowing}>
                        <DefaultText style={styles.statsNumber}>34</DefaultText>
                        <DefaultText style={styles.statsInfo}>Following</DefaultText>
                    </View>
                </View>
            </View>
            <View style={styles.momentsContainer}>
                <DefaultText style={styles.header}>Moments</DefaultText>
                <MomentsList navigation={props.navigation} />
            </View>
            <CreateFeedButton />
        </View>
    );
}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
    },
    profileContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
        borderBottomColor: theme.BorderColor,
        borderBottomWidth: 1
    },
    profileImage: {
        width: 56,
        height: 56,
    },
    nameContainer: {
        justifyContent: 'space-around',
        paddingVertical: 5,
        marginLeft: 15
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 12,
        fontWeight: '500',
        color: theme.LightTextColor
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: theme.BorderColor,
        borderBottomWidth: 1
    },
    header: {
        fontWeight: '500',
        fontSize: 10,
        marginBottom: 15
    },
    aboutContent: {
        fontSize: 10,
        color: theme.LightTextColor
    },
    stateContent: {
        flexDirection: 'row',
        // flex: 1
    },
    statsMoments: {
        flexGrow: 2
    },
    statsFollower: {
        flexGrow: 1.9
    },
    statsFollowing: {
        flexGrow: 0.1
    },
    statsNumber: {
        color: theme.PrimaryColor,
        fontWeight: '500',
        fontSize: 12,
        marginBottom: 5
    },
    statsInfo: {
        fontWeight: '500',
        letterSpacing: 1,
        fontSize: 10,
        textTransform: 'uppercase',
        color: theme.TextColor
    },
    momentsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    }
});

export default ProfileScreen;