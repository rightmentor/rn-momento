import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as theme from '../constant/Theme';
import DefaultText from '../components/ui/DefaultText';
import DefaultSwitch from '../components/ui/DefaultSwitch';

const SettingsScreen = props => {

    const settingChangeHandler = value => {
        console.log('value', value);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <DefaultText style={styles.heading} >Feed Settings</DefaultText>
            </View>
            <DefaultSwitch value={true} valueChangeHandler={settingChangeHandler} />
            <View style={styles.header}>
                <DefaultText style={styles.heading} >Account Settings</DefaultText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: theme.BorderColor,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    heading: {
        fontSize: 10,
        fontWeight: '500'
    }
});

export default SettingsScreen;