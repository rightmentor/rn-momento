import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Logo from '../components/Logo';
import DefaultText from '../components/DefaultText';
import DefaultButton from '../components/DefaultButton';
import NoBgButton from '../components/NoBgButton';

const StartScreen = props => {

    const loginHandler = () => {
        props.navigation.navigate('login');
    }

    const createAccountHandler = () => {
        props.navigation.navigate('createAccount');
    }
    return (
        <View style={styles.screen}>
            <View style={styles.logoContainer}>
                <Logo />
                <DefaultText style={styles.tagLine}>Momento is a social app that lets you share your moments with friends</DefaultText>
            </View>
            <DefaultButton title="Sign In" pressHandler={loginHandler} />
            <NoBgButton title="Create New Account" pressHandler={createAccountHandler} />
            <DefaultText style={styles.copyright}>@2021 Momento Inc.</DefaultText>
        </View>
    );
}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 80,
        paddingHorizontal: 30,
        backgroundColor: '#fff'
    },
    logoContainer: {
        alignItems: 'center',
        paddingHorizontal: 55
    },
    tagLine: {
        textAlign: 'center',
        fontSize: 12,
        paddingTop: 40
    },
    copyright: {
        textAlign: 'center',
        fontSize: 12
    },
});

export default StartScreen;