import React from 'react';
import { View, FlatList } from 'react-native';
import Card from '../components/card';

import { colors, globalStyles, rem } from '../constant';

const Feeds = props => {
    const list = [
        { id: '1', item: 'name' },
        { id: '2', item: 'name' },
        { id: '3', item: 'name' },
        { id: '4', item: 'name' },
        { id: '5', item: 'name' },
        { id: '6', item: 'name' },
    ];

    const feedDetailHandler = () => {
        props.navigation.navigate('feedDetails', {userName: 'Mellisa'})
    }
    return (
        <View style={globalStyles.screen}>
            <FlatList
                data={list}
                keyExtractor={item=> item.id}
                renderItem={item => <Card openFeedDetail={feedDetailHandler} />}
                contentContainerStyle={globalStyles.feedListContainer}
            />
        </View>
    );
}

export default Feeds;