import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DefaultText from '../../components/DefaultText';
import DefaultButton from '../../components/DefaultButton';
import NoBgButton from '../../components/NoBgButton';
import InputBox from '../../components/InputBox';

const LoginScreen = props => {
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setpasswordInput] = useState();

    const goToFeedHandler = () => {
        console.log('Go to feed');
    }

    const resetPasswordHandler = () => {
        props.navigation.navigate('resetPassword');
    }

    const emailInputHandler = input => {
        console.log('email ==> ', input.target.value);
    }

    const passwordInputHandler = input => {
        console.log('Password ==> ', input.target.value);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <DefaultText>Type in your Email ID and Password you choose for Momento and click Go to Feed</DefaultText>
            </View>
            <View style={styles.inputBoxContainer}>
                <InputBox placeholder="Email ID" value={emailInput} valueChange={emailInputHandler} />
                <InputBox placeholder="Password" value={passwordInput} valueChange={passwordInputHandler} />
            </View>
            <View style={styles.buttonContainer}>
                <DefaultButton title="Go to Feed" pressHandler={goToFeedHandler} />
            </View>
            <View style={styles.footerContainer}>
                <NoBgButton title="Can't Sing In? Reset Password" pressHandler={resetPasswordHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 80,
        paddingHorizontal: 30,
    },
    headerContainer: {
        width: '100%',
        flexGrow: 2
    }, 
    inputBoxContainer: {
        width: '100%',
        flexGrow: 2,
        justifyContent: 'space-around'
    },
    buttonContainer: {
        width: '100%',
        flexGrow: 2,
        justifyContent: 'center'
    },
    footerContainer: {
        width: '100%',
        flexGrow: 2,
        justifyContent: 'flex-end'
    }
});

export default LoginScreen;