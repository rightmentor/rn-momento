import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Feed Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FeedScreen;