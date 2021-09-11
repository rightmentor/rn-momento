import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import * as theme from "../../constant/Theme"
import FeedUserInfo from '../../components/feed/FeedUserInfo';
import CircleImage from '../../components/ui/CircleImage';
import DefaultText from '../../components/ui/DefaultText';
import NoBgButton from '../../components/ui/NoBgButton';
import CommentItem from '../../components/list/CommentItem';
import MessageInput from '../../components/MessageInput';

const win = Dimensions.get('window');

const FeedDetailsScreen = props => {

    const likeFeedHandler = () => {
        console.log('like clicked')
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.headerContainer}>
                <FeedUserInfo />
                <View style={styles.tagUserContainer} >
                    <CircleImage style={styles.tagUser} />
                    <CircleImage style={styles.tagUser} />
                    <CircleImage style={styles.tagUser} />
                </View>
            </View>
            <Image
                source={require('../../assets/Rectangle3.png')}
                style={styles.feedImage}
            />
            <DefaultText style={styles.caption} >It was a humorously perilous for both of us for, before we proceed further</DefaultText>
            <DefaultText style={styles.time} >
                <FontAwesome5 style={styles.mapIcon} name='map-marker-alt' size={15} color={theme.LightTextColor} />
                10 mins ago
            </DefaultText>
            <View style={styles.likeShareContainer}>
                <View style={styles.likeShareInner}>
                    <MaterialIcons style={styles.likeShareIcon} name="favorite-outline" size={24} color="black" />
                    <DefaultText>214</DefaultText>
                </View>
                <View style={styles.likeShareInner}>
                    <MaterialIcons style={styles.likeShareIcon} name="share" size={24} color="black" />
                    <DefaultText >3</DefaultText>
                </View>
            </View>
            <View style={styles.commentHeader}>
                <DefaultText style={styles.commentsCount}>21 Comments</DefaultText>
                <NoBgButton title="View All" style={styles.viewAll}/>
            </View>
            <CommentItem />
            <CommentItem />

            <MessageInput />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    tagUserContainer: {
        flexDirection: 'row'
    },
    tagUser: {
        width: 25,
        height: 25,
        marginHorizontal: 3
    },
    feedImage: {
        width: '100%',
        height: win.height / 2,
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    caption: {
        fontWeight: '500',
        marginTop: 15,
        marginBottom: 20,
        fontSize: 12
    },
    time: {
        fontSize: 10,
        fontWeight: '300',
        color: theme.LightTextColor,
    },
    mapIcon: {
        marginRight: 10,
    },
    likeShareContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: -20
    },
    likeShareInner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.LightTextColor,
        flexGrow: 1,
        paddingVertical: 15
    },
    likeShareIcon: {
        marginRight: 10
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    commentsCount: {
        fontSize: 10,
        fontWeight: '500'
    },
    viewAll: {
        textDecorationLine: "underline",
        fontSize: 10,
        fontWeight: '500'
    }
})

export default FeedDetailsScreen;