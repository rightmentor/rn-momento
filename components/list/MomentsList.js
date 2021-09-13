import React from "react";
import { FlatList, Image, StyleSheet } from 'react-native';

import MomentItem from "./MomentItem";

const moments = [
    { id: '1', url: '' },
    { id: '2', url: '' },
    { id: '3', url: '' },
    { id: '4', url: '' },
    { id: '5', url: '' },
    { id: '6', url: '' },
    { id: '7', url: '' },
    { id: '8', url: '' }
]

const MomentsList = props => {

    const openMomentDetailHandler = () => {
        props.navigation.navigate('myfeed', {
            screen: 'feedDetails',
            params: { name: 'jane' },
        });
    }

    return (
        <FlatList
            keyExtractor={item => item.id}
            data={moments}
            contentContainerStyle={styles.contentContainer}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={item => <MomentItem itemPressHandler={openMomentDetailHandler} />}
        />

    );
}

const styles = StyleSheet.create({
    contentContainer: {
        gap: 15
    },
    columnWrapper: {
        gap: 15
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 5
    }
})

export default MomentsList;