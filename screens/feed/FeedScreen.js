import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Card from '../../components/Card';
import CreateFeedButton from '../../components/CreateFeedButton';

const FeedScreen = props => {

    const openFeedDetailHandler = () => {
        props.navigation.navigate('feedDetails', { name: 'Melissa\'s Moments' })
    }

    const likeFeedHandler = () => {
        console.log('like clicked')
    }

    return (
        <View style={styles.screen}>
            <ScrollView style={styles.feeds}>
                <Card openFeedDetail={openFeedDetailHandler} likeFeed={likeFeedHandler} />

                {/* <Card openFeedDetail={openFeedDetailHandler} /> */}
                {/* <Card openFeedDetail={openFeedDetailHandler} /> */}
            </ScrollView>
            <CreateFeedButton />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 5,
        backgroundColor: '#ffffff'
    },
    feeds: {
        backgroundColor: '#ffffff'
    }
})

export default FeedScreen;