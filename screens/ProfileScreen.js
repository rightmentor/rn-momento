import React from 'react';
import { View, StyleSheet } from 'react-native';

import CreateFeedButton from '../components/CreateFeedButton';

const ProfileScreen = props => {

    return (
        <View style={styles.screen}>
            <CreateFeedButton />
        </View>
    );
}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
});

export default ProfileScreen;