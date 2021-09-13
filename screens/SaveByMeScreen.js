import React from 'react';
import { View, StyleSheet } from 'react-native';

import MomentsList from '../components/list/MomentsList';

const ProfileScreen = props => {

    return (
        <View style={styles.screen}>
            <MomentsList navigation={props.navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    }
});

export default ProfileScreen;