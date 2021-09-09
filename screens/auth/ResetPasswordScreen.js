import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DefaultText from '../../components/DefaultText';
import DefaultButton from '../../components/DefaultButton';
import NoBgButton from '../../components/NoBgButton';
import InputBox from '../../components/InputBox';

const ResetPasswordScreen = props => {
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setpasswordInput] = useState();

    const sendLinkHandler = () => {
        console.log('send link');
    }

    const emailInputHandler = input => {
        console.log('email ==> ', input.target.value);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <DefaultText>No Problem! Just give in your Email ID and we will send you a link to reset your password</DefaultText>
            </View>
            <View style={styles.inputContainer}>
                <InputBox placeholder="Email ID" value={emailInput} valueChange={emailInputHandler} />
            </View>
            <View style={styles.footerContainer}>
                <DefaultButton title="Send Link" pressHandler={sendLinkHandler} />
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
        flexGrow: 1,
        width: '100%'
    },
    inputContainer: {
        flexGrow: 0.7,
        width: '100%',
        // justifyContent: 'center'
    },
    footerContainer: {
        flexGrow: 3,
        width: '100%'
    }
});

export default ResetPasswordScreen;